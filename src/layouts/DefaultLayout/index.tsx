import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function DefaultLayout() {
  return (
    <Container fluid className="p-0 w-100">
      <Header />
      <Row className="w-100 ms-0">
        <Col xs={1} className="p-0 ml-3 text-center" style={{ width: '5rem' }}>
          <Sidebar />
        </Col>
        <Col lg className="p-0">
          <Outlet />
        </Col>
      </Row >
    </Container >
  )
}