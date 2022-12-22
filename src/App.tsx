import { BrowserRouter } from 'react-router-dom';
import { DoctorsContextProvider } from './contexts/DoctorsContext';
import { Router } from './router';

export function App() {
  return (
    <BrowserRouter>
      <DoctorsContextProvider>
        <Router />
      </DoctorsContextProvider>
    </BrowserRouter>
  )
}

