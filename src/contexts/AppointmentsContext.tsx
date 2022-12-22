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
    }
  ],
}

interface AppointmentsContextProps {
  appointments: Appointments[];
  clientsQuantityByDate: number;
  amountByDate: number;
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
  const initialSubTotal = 0
  const amountByDate = appointmentsByDate ? appointmentsByDate.reduce((amount, appointment) => amount + appointment.amount, initialSubTotal) : 0

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
        amountByDate
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}