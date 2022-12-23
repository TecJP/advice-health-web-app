import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export type Appointments = {
  id: string,
  date: string,
  appointmentsDate: [
    {
      id: string,
      client: string,
      doctor: string,
      hour: string,
      attended: boolean,
      amount: number,
      confirmed: boolean,
      canceled: boolean
    }
  ],
}

interface ChartData {
  labels: string[],
  datasets: {
    data: number[],
    backgroundColor: string[],
    hoverOffset: number,
  }[]
}

interface AppointmentsContextProps {
  appointments: Appointments[];
  clientsQuantityByDate: number;
  amountByDate: number;
  clientsQuantityByAttended: number;
  clientsQuantityByCanceled: number;
  firstChartData: ChartData;
  secondChartData: ChartData;
}

interface AppointmentsContextProviderProps {
  children: ReactNode;
}

export const AppointmentsContext = createContext<AppointmentsContextProps>(
  {} as AppointmentsContextProps
)

export function AppointmentsContextProvider({ children }: AppointmentsContextProviderProps) {
  const [appointments, setAppointments] = useState<Appointments[]>([])
  const date = new Date().getDate().toString()
  const appointmentsFiltered = appointments.find(appointment => appointment.date === date)
  const appointmentsByDate = appointmentsFiltered && appointmentsFiltered.appointmentsDate.map(appointment => appointment)
  const clientsQuantityByDate = appointmentsByDate ? appointmentsByDate.length : 0
  const filterClientsAttended = appointmentsByDate && appointmentsByDate.filter(client => client.attended === true)
  const filterClientsCanceled = appointmentsByDate && appointmentsByDate.filter(client => client.canceled === true)
  const clientsQuantityByAttended = filterClientsAttended ? filterClientsAttended.length : 0
  const clientsQuantityByCanceled = filterClientsCanceled ? filterClientsCanceled.length : 0
  const initialSubTotal = 0
  const amountByDate = appointmentsByDate ? appointmentsByDate.reduce((amount, appointment) => amount + appointment.amount, initialSubTotal) : 0

  const firstChartData = {
    labels: [
      'Pacientes totais',
      'Pacientes atendidos',
    ],
    datasets: [
      {
        data: [
          clientsQuantityByDate,
          clientsQuantityByAttended,
        ],
        backgroundColor: [
          '#757BC8',
          '#E0C3FC'
        ],
        hoverOffset: 4,
      }
    ]
  }

  const secondChartData = {
    labels: [
      'Pacientes totais',
      'Cancelamentos',
    ],
    datasets: [
      {
        data: [
          clientsQuantityByDate,
          clientsQuantityByCanceled,
        ],
        backgroundColor: [
          '#8187DC',
          '#DDBDFC'
        ],
        hoverOffset: 4,
      }
    ]
  }

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get<Appointments[]>('appointments');
      const appointments = response.data.map(appointment => appointment)
      setAppointments(appointments)
    }
    loadAppointments()
  }, []);

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        clientsQuantityByDate,
        amountByDate,
        clientsQuantityByAttended,
        clientsQuantityByCanceled,
        firstChartData,
        secondChartData,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}