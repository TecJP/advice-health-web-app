import { BrowserRouter } from 'react-router-dom';
import { AppointmentsContextProvider } from './contexts/AppointmentsContext';
import { ClientContextProvider } from './contexts/ClientContext';
import { DoctorsContextProvider } from './contexts/DoctorsContext';
import { Router } from './router';

export function App() {
  return (
    <BrowserRouter>
      <DoctorsContextProvider>
        <AppointmentsContextProvider>
          <ClientContextProvider>
            <Router />
          </ClientContextProvider>
        </AppointmentsContextProvider>
      </DoctorsContextProvider>
    </BrowserRouter>
  )
}

