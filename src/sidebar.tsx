import { CalendarBlank, ChartBar, ListDashes } from "phosphor-react";

export const menuItem = [
  {
    path: '/',
    name: "Dashboard",
    icon: <ChartBar size={32} />
  },
  {
    path: '/appointments',
    name: "Agendamentos",
    icon: <CalendarBlank size={32} />,
  },
  {
    path: '/appointments-query',
    name: "Consultas",
    icon: <ListDashes size={32} />
  },
]