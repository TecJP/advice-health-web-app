import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { UserCircle } from 'phosphor-react'
export function Header() {
  return (
    <Navbar expand="xl" variant="light" className="shadow p-1 bg-white py-auto" style={{ zIndex: 1}}>
      <Container fluid>
        <Navbar.Text className="text-dark">
          <h1 className="fs-3">Advice Health Web App</h1>
          <p>Consultório de Médicos da Advice Health Web App</p>
        </Navbar.Text>
        <NavbarBrand className="text-center">
          <UserCircle size={52} />
          <p>João Pedro</p>
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}