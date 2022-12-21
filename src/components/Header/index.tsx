import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { UserCircle } from 'phosphor-react'
export function Header() {
  return (
    <Navbar expand="xl" variant="light" className="shadow-sm p-1 bg-white">
      <Container fluid>
        <Navbar.Text className="text-dark" style={{ marginLeft: '4rem' }}>
          <h1 className="fs-3">Advice Health Web App</h1>
          <p className="mb-0">Consultório de Médicos da Advice Health Web App</p>
        </Navbar.Text>
        <NavbarBrand className="text-center pt-0">
          <UserCircle size={52} />
          <p className="mb-0">João Pedro</p>
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}