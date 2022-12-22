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
    <Navbar className="h-100">
      <Stack gap={3}>
        <Button variant="transparent" className="border-0">
          <CaretDoubleRight size={32} />
        </Button>
        {menuItem.map((item, index) => (
          <NavLink key={index} to={item.path} className="item active" title={item.name}>
            {item.icon}
          </NavLink>
        ))}
      </Stack>
    </Navbar>
  )
}