import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Appointments } from "./pages/Appointments";
import { AppointmentsQuery } from "./pages/AppointmentsQuery";
import { Dashboard } from "./pages/Dashboard";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments-query" element={<AppointmentsQuery />} />
      </Route>
    </Routes>
  )
}