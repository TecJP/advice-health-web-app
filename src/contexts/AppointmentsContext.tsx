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
    }
  ],
}

interface AppointmentsContextProps {
  appointments: Appointments[];
}

interface AppointmentsContextProviderProps {
  children: ReactNode;
}

export const AppointmentsContext = createContext<AppointmentsContextProps>(
  {} as AppointmentsContextProps
)

export function AppointmentsContextProvider({ children }: AppointmentsContextProviderProps) {
  const [appointments, setAppointments] = useState<Appointments[]>([])

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get<Appointments[]>('appointments');
      const appointments = response.data.map(appointment => appointment)
      setAppointments(appointments)
    }
    loadAppointments()
  }, []);

  return (
    <AppointmentsContext.Provider value={{ appointments }}>
      {children}
    </AppointmentsContext.Provider>
  )
}