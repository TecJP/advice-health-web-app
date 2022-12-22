import { BrowserRouter } from 'react-router-dom';
import { AppointmentsContextProvider } from './contexts/AppointmentsContext';
import { DoctorsContextProvider } from './contexts/DoctorsContext';
import { Router } from './router';

export function App() {
  return (
    <BrowserRouter>
      <DoctorsContextProvider>
        <AppointmentsContextProvider>
          <Router />
        </AppointmentsContextProvider>
      </DoctorsContextProvider>
    </BrowserRouter>
  )
}

