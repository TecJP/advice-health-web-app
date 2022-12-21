import { Col, Container, Row } from "react-bootstrap";
import { Calendar } from "../../components/Calendar";
import { DoctorsList } from "../../components/DoctorsList";
import { HoursList } from "../../components/HoursList";

export function Appointments() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col lg="4" className="px-4" style={{ backgroundColor: "#dedede", height: '59.9%' }}>
          <h1 className="fs-3 mt-4">Médicos</h1>
          <Container fluid className="mt-2 p-0 pe-3" style={{ overflowY: 'scroll', height: '35%' }}>
            <DoctorsList />
          </Container>
          <Container fluid className="mt-5">
            <Calendar />
          </Container>
        </Col>
        <Col className="px-4">
          <h1 className="fs-3 mt-4">21/Dez 2022</h1>
          <Container fluid className="mt-2 p-0 pe-3" style={{ overflowY: 'scroll', height: '55.2%' }}>
            <HoursList />
          </Container>
        </Col>
      </Row>
    </Container >
  )
}