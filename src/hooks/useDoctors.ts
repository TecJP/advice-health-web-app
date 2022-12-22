import { useContext } from 'react'
import { DoctorsContext } from '../contexts/DoctorsContext'

export function useDoctors() {
  const value = useContext(DoctorsContext)
  return value
}