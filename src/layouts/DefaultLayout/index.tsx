import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function DefaultLayout() {
  return (
    <Container fluid className="p-0 w-100 h-100">
      <Header />
      <Row className="ms-0 w-100" style={{ height: 'calc(100vh - 87px)' }}>
        <Col xs={1} className="p-0 h-100 text-center bg-gray">
          <Sidebar />
        </Col>
        <Col lg className="p-0 h-100">
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}