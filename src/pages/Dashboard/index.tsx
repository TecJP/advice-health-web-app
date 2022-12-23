import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row, Stack } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { AppointmentsList } from "../../components/AppointmentsList";
import { Calendar } from "../../components/Calendar";
import { NoticeAndRemindersTable } from "../../components/NoticeAndRemindersTable";
import { useAppointments } from "../../hooks/useAppointments";

export function Dashboard() {
  const { clientsQuantityByDate, amountByDate, firstChartData, secondChartData } = useAppointments()
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <Container className="h-100 bg-blue" fluid>
      <Row className="body-height-minus-header">
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
          <Row className="pt-4 mx-4 mt-4 gap-2 container-dashboard">
            <h1 className="fs-3">Dashboard</h1>
            <Col className="mt-0 h-100">
              <Card className="chart-container p-4">
                <Container fluid className="h-100 d-flex justify-content-between">
                  <Doughnut
                    data={firstChartData}
                    options={{
                      responsive: true,
                    }}
                  />
                  <Doughnut
                      data={secondChartData}
                      options={{
                        responsive: true,
                      }}
                    />
                </Container>
              </Card>
            </Col>
            <Col className="chart-container d-grid gap-4">
              <Card className="h-100 p-4">
                <h1 className="fs-2 m-0">Total de Pacientes do dia</h1>
                <p className="fs-3 m-0 mt-3">{clientsQuantityByDate}</p>
              </Card>
              <Card className="h-100 p-4">
                <h1 className="fs-2 m-0">Faturamento do dia</h1>
                <p className="fs-3 m-0 mt-3">{Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(amountByDate)}</p>
              </Card>
            </Col>
          </Row>
          <Row className="mx-4 mt-4">
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