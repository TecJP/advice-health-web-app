import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row, Stack } from "react-bootstrap";
import { AppointmentsList } from "../../components/AppointmentsList";
import { Calendar } from "../../components/Calendar";
import { NoticeAndRemindersTable } from "../../components/NoticeAndRemindersTable";
import { useAppointments } from "../../hooks/useAppointments";

export function Dashboard() {
  const { clientsQuantityByDate, amountByDate } = useAppointments()
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  return (
    <Container className="h-100 bg-blue" fluid>
      <Row style={{ height: 'calc(100vh - 87px)' }}>
        <Col lg="9" className="h-100">
          <Row className="pt-4 mx-4">
            <InputGroup className="text-center">
              <Form.Control
                placeholder="Busca"
              />
              <Button variant="outline-secondary" size="lg" className="d-flex align-items-center justify-content-center">
                <MagnifyingGlass size={24} weight="bold" />
              </Button>
            </InputGroup>
          </Row>
          <Row className="pt-4 mx-4 gap-2">
            <h1 className="fs-3 mt-4">Dashboard</h1>
            <Col className="h-100">
              <Card className="h-100 p-5" bg="light">
                <Stack className="h-100" gap={5}>

                </Stack>
              </Card>
            </Col>
            <Col className="h-100" gap={2}>
              <Card className="h-100 p-4 mb-4" bg="light">
                <h1>Total de Pacientes do dia</h1>
                <p>{clientsQuantityByDate}</p>
              </Card>
              <Card className="h-100 p-4" bg="light">
                <h1>Faturamento do dia</h1>
                <p>{Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(amountByDate)}</p>
              </Card>
            </Col>
          </Row>
          <Row className="pt-4 mx-4">
            <h1 className="fs-3">Avisos e Lembretes</h1>
            <NoticeAndRemindersTable />
          </Row>
        </Col>
        <Col className="p-0 h-100">
          <Calendar date={selectedDate} setDate={setSelectedDate} />
          <Container className="mt-5 p-0 pe-3 appointments-list-height">
            <AppointmentsList date={selectedDate.getDate().toString()} />
          </Container>
        </Col>
      </Row>
    </Container >
  )
}