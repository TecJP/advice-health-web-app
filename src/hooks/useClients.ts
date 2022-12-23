import { useContext } from 'react'
import { ClientContext } from '../contexts/ClientContext'

export function useClients() {
  const value = useContext(ClientContext)
  return value
}