import { CalendarPlus, PencilSimple, PlusCircle, Trash, UserCircle } from "phosphor-react";
import { useState } from "react";
import { Card, Stack, Container, Row, Col, Button } from "react-bootstrap";
import { useClients } from "../../hooks/useClients";
import { useDoctors } from "../../hooks/useDoctors";

interface HoursListProps {
  doctorId: string
}

export function HoursList({doctorId}: HoursListProps) {
  const { doctorSchedule } = useDoctors()
  const { findClient } = useClients() 
  const scheduleDoctor = doctorSchedule.find(doctor => doctor.id === doctorId)
  const hoursDoctor = scheduleDoctor && Object.entries(scheduleDoctor.schedule[0]).map(([index, value]) => { return { hour: index, value} })

  return (
    <Container className="p-0 ps-0 pe-2 h-100 overflow-scroll">
      <Stack gap={2}>
        {hoursDoctor && hoursDoctor.map(hour => {
          const clientId = hour.value.client
          return (
            <Card className="shadow-sm" key={hour.hour}>
              <Card.Body>
                <Row className="d-flex align-items-center">
                  <Col md="2" className="align-middle">
                    <h1 className="fs-3 mb-0">{`${hour.hour}:00`}</h1>
                  </Col>
                  <Col md="9">
                    <Container fluid className="d-flex align-items-center">
                      {findClient(clientId) === undefined ? '' : <UserCircle size={54} />}
                      <p className="ps-2 m-0">{`${findClient(clientId) === undefined ? '' : findClient(clientId)}`}</p>
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