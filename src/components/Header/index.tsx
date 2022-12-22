import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { UserCircle } from 'phosphor-react'
export function Header() {
  return (
    <Navbar variant="light" sticky="top" className="shadow-sm w-100 p-0">
      <Container className="p-0" fluid>
        <Navbar.Text className="text-dark" style={{ marginLeft: '4rem' }}>
          <h1 className="fs-3">Advice Health Web App</h1>
          <p className="mb-0">Consultório de Médicos da Advice Health Web App</p>
        </Navbar.Text>
        <NavbarBrand className="text-center pt-0">
          <UserCircle size={48} />
          <p className="mb-0">João Pedro</p>
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}