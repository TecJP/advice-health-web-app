import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export type Doctors = {
  id: string,
  name: string,
  crm: string,
  expertise: string,
  availableHours: [''],
}

interface DoctorsContextProps {
  doctors: Doctors[];
  findDoctor: (id: string) => void;
  doctorsHourList: (id: string) => string[];
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

  function findDoctor(id: string) {
    const doctorName = doctors.find(doctor => doctor.id === id)
    if (!doctorName) {
      return;
    }
    return doctorName.name
  }

  function doctorsHourList(id: string) {
    const doctorHours = doctors.find(doctor => doctor.id === id)
    return doctorHours ? doctorHours.availableHours : ['']
  }

  return (
    <DoctorsContext.Provider value={{ doctors, findDoctor, doctorsHourList }}>
      {children}
    </DoctorsContext.Provider>
  )
}