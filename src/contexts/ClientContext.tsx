import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export type Clients = {
  id: string,
  name: string,
  birthDate: string,
  cpf: number,
  address: {
    cep: string,
    street: string,
    neighboor: string,
    number: number,
    city: string,
    state: string,
  }
}

interface ClientsContextProps {
  clients: Clients[];
  findClient: (id: string) => void;
}

interface ClientContextProviderProps {
  children: ReactNode;
}

export const ClientContext = createContext<ClientsContextProps>(
  {} as ClientsContextProps
)

export function ClientContextProvider({ children }: ClientContextProviderProps) {
  const [clients, setClients] = useState<Clients[]>([])

  useEffect(() => {
    async function loadDoctors() {
      const response = await api.get<Clients[]>('clients');
      const clients = response.data.map(client => client)
      setClients(clients)
    }
    loadDoctors()
  }, []);

  function findClient(id: string) {
    const clientName = clients.find(client => client.id === id)
    if (!clientName) {
      return;
    } else if (clientName === undefined) {
      return;
    } else {
      return clientName.name
    }
  }

  return (
    <ClientContext.Provider value={{ clients, findClient }}>
      {children}
    </ClientContext.Provider>
  )
}