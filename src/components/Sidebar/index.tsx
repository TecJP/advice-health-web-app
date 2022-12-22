import { CaretDoubleRight } from "phosphor-react";
import { Button, Navbar, Stack } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import { menuItem } from "../../sidebar";
import './styles.css'

interface SidebarProps {
  expanded: boolean,
  toggleExpand: () => void,
}

export function Sidebar({ expanded, toggleExpand }: SidebarProps) {
  const { pathname } = useLocation()

  return (
    <Navbar className={`h-100 w-100 ms-0 me-2 ps-3 pe-3`}>
      <Stack className="h-100" gap={3}>
        <Button variant="transparent" className={`border-0 p-0 ps-0 ${expanded && 'd-flex align-items-center justify-content-end'}`} >
          <CaretDoubleRight size={32} className={`${expanded && 'sidebar-expand'}`} onClick={toggleExpand} />
        </Button>
        {menuItem.map((item, index) => (
          <NavLink key={index} to={item.path} className={`w-100 gap-1 d-flex align-items-center justify-content-start item ${pathname === item.path && 'active'}`} title={item.name}>
            {item.icon}
            {expanded && <p className="m-0">{item.name}</p>}
          </NavLink>
        ))}
      </Stack>
    </Navbar>
  )
}