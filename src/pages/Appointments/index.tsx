import { Col, Container, Row } from "react-bootstrap";
import { Calendar } from "../../components/Calendar";
import { DoctorsList } from "../../components/DoctorsList";
import { HoursList } from "../../components/HoursList";

export function Appointments() {
  return (
    <Container fluid className="h-100 bg-blue">
      <Row className="h-100">
        <Col lg="4" className="px-4 h-100">
          <h1 className="fs-3 mt-4">Médicos</h1>
          <Container fluid className="mt-3 p-0 pe-3 doctors-list-height">
            <DoctorsList />
          </Container>
          <Container fluid className="mt-5">
            <Calendar />
          </Container>
        </Col>
        <Col className="px-4 h-100">
          <h1 className="fs-3 mt-4">21/Dez 2022</h1>
          <Container fluid className="mt-3 p-0 pe-3 hours-list-height">
            <HoursList />
          </Container>
        </Col>
      </Row>
    </Container >
  )
}