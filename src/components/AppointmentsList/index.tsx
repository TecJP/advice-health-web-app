import { UserCircle } from "phosphor-react";
import { Card, Stack, Container, Row, Col } from "react-bootstrap";
import { useAppointments } from "../../hooks/useAppointments";
import { useClients } from "../../hooks/useClients";
import { useDoctors } from "../../hooks/useDoctors";

interface AppointmentsListProps {
  date: string
}

export function AppointmentsList({ date }: AppointmentsListProps) {
  const { appointments } = useAppointments()
  const { findDoctor } = useDoctors();
  const { findClient } = useClients()
  const appointmentsFiltered = appointments.find(appointment => appointment.date === date)
  const appointmentsByDate = appointmentsFiltered && appointmentsFiltered.appointmentsDate.map(appointment => appointment)
  return (
    <Container className="p-0 pe-2 h-100 overflow-scroll">
      <Stack gap={2}>
        {appointmentsByDate && appointmentsByDate.map(appointment => {
          return (
            <Card key={appointment.id}>
              <Card.Body>
                <Row className="align-middle">
                  <Col md="2">
                    <UserCircle size={52} />
                  </Col>
                  <Col md="10">
                    <p className="mb-0">{`${findClient(appointment.client)}`}</p>
                    <span className="mb-0">{`ás ${appointment.hour}:00hrs com ${findDoctor(appointment.doctor)}`}</span>
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