import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export type Doctors = {
  id: string,
  name: string,
  crm: string,
  expertise: string,
}

interface DoctorsContextProps {
  doctors: Doctors[];
}

interface DoctorsContextProviderProps {
  children: ReactNode;
}

export const DoctorsContext = createContext<DoctorsContextProps>(
  {} as DoctorsContextProps
)

export function DoctorsContextProvider({ children }: DoctorsContextProviderProps) {
  const [doctors, setDoctors] = useState<Doctors[]>([])

  useEffect(() => {
    async function loadDoctors() {
      const response = await api.get<Doctors[]>('doctors');
      const doctors = response.data.map(doctor => doctor)
      setDoctors(doctors)
    }
    loadDoctors()
  }, []);

  return (
    <DoctorsContext.Provider value={{ doctors }}>
      {children}
    </DoctorsContext.Provider>
  )
}