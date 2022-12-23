import { CalendarPlus, PencilSimple, PlusCircle, Trash, UserCircle } from "phosphor-react";
import { useState } from "react";
import { Card, Stack, Container, Row, Col, Button } from "react-bootstrap";
import { useDoctors } from "../../hooks/useDoctors";

interface HoursListProps {
  doctorId: string
}

export function HoursList({doctorId}: HoursListProps) {
  const { doctorsHourList } = useDoctors()
  const [actionsActive, setActionsActive] = useState(false)

  function toggleActions() {
    setActionsActive(!actionsActive)
  }

  return (
    <Container className="p-0 ps-0 pe-2 h-100 overflow-scroll">
      <Stack gap={2}>
        {doctorId && doctorsHourList(doctorId).map(hour => {
          return (
            <Card className="shadow-sm" key={hour}>
              <Card.Body>
                <Row className="d-flex align-items-center">
                  <Col md="2" className="align-middle">
                    <h1 className="fs-3 mb-0">{`${hour}:00`}</h1>
                  </Col>
                  <Col md="9">
                    <Container fluid className="d-flex align-items-center">
                    </Container>
                  </Col>
                  <Col md="1">
                    <Container className="d-flex align-items-center justify-content-end">
                      <Button variant="outline-transparent" className="border-0 pt-5 pb-0 ps-0 pe-0 text-black">
                        <PlusCircle size={32} weight="bold" />
                      </Button>
                    </Container>
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