import { CalendarBlank, CaretDoubleRight, ChartBar, ListDashes } from "phosphor-react";
import { useState } from "react";
import { Button, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './styles.css'

export function Sidebar() {
  const menuItem = [
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

  return (
    <Navbar style={{ height: '89.8vh', backgroundColor: "#f1f1f1" }} expand="xs" className="text-black">
      <Stack gap={3}>
        <Button variant="transparent">
          <CaretDoubleRight size={32} />
        </Button>
        {menuItem.map((item, index) => (
          <NavLink key={index} to={item.path} className="item active">
            {item.icon}
          </NavLink>
        ))}
      </Stack>
    </Navbar>
  )
}