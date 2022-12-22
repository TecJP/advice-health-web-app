import { useContext } from 'react'
import { AppointmentsContext } from '../contexts/AppointmentsContext'

export function useAppointments() {
  const value = useContext(AppointmentsContext)
  return value
}