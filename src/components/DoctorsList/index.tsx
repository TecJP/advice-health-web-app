import { UserCircle } from "phosphor-react";
import { Card, Stack, Container, Row, Col } from "react-bootstrap";
import { useDoctors } from "../../hooks/useDoctors";

export function DoctorsList() {
  const { doctors } = useDoctors()

  return (
    <Container className="p-0 pe-2 h-100 overflow-scroll">
      <Stack gap={2}>
        {doctors.map(doctor => {
          return (
            <Card key={doctor.id}>
              <Card.Body>
                <Row className="d-flex align-items-center">
                  <Col md="2">
                    <UserCircle size={52} />
                  </Col>
                  <Col md="10" className="ps-0">
                    <p className="fs-5 mb-0">{doctor.name}</p>
                    <span className="mb-0">{`${doctor.expertise} / CRM: ${doctor.crm}`}</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )
        })}
      </Stack>
    </Container>
  )
}