import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row, Stack } from "react-bootstrap";
import { AppointmentsList } from "../../components/AppointmentsList";
import { Calendar } from "../../components/Calendar";
import { NoticeAndRemindersTable } from "../../components/NoticeAndRemindersTable";

export function Dashboard() {
  return (
    <Container className="h-100 bg-blue" fluid>
      <Row style={{ height: 'calc(100vh - 87px)' }}>
        <Col lg="9" className="h-100">
          <Row className="pt-4 mx-4">
            <InputGroup className="text-center">
              <Form.Control
                placeholder="Busca"
              />
              <Button variant="outline-secondary" size="lg" className="align-middle">
                <MagnifyingGlass size={24} weight="bold" />
              </Button>
            </InputGroup>
          </Row>
          <Row className="pt-4 mx-4 gap-2">
            <h1 className="fs-3 mt-4">Dashboard</h1>
            <Col className="h-100">
              <Card className="h-100 p-2" bg="secondary">
                <Stack className="h-100" gap={5}>
                  <p>Total de Pacientes: 30</p>
                  <p>Total de Pacientes Atendidos: 20</p>
                  <p>Total de Pacientes: 30</p>
                </Stack>
              </Card>
            </Col>
            <Col className="h-100" gap={2}>
              <Card className="h-100 p-2 mb-4" bg="secondary">

              </Card>
              <Card className="h-100 p-2" bg="secondary">

              </Card>
            </Col>
          </Row>
          <Row className="pt-4 mx-4">
            <h1 className="fs-3">Avisos e Lembretes</h1>
            <NoticeAndRemindersTable />
          </Row>
        </Col>
        <Col className="p-0 h-100">
          <Calendar />
          <Container className="mt-5 p-0 pe-3 appointments-list-height">
            <AppointmentsList />
          </Container>
        </Col>
      </Row>
    </Container >
  )
}