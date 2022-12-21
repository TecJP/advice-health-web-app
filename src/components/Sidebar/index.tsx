import { CaretDoubleRight } from "phosphor-react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

export function Sidebar() {
  return (
    <Navbar style={{width: '4.5rem', height: '100vh', zIndex: 0}} className="bg-black text-white">
      <Container>
          <CaretDoubleRight size={26} />
      </Container>
    </Navbar>
  )
}