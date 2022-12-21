import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { AppointmentsList } from "../../components/AppointmentsList";
import { Calendar } from "../../components/Calendar";
import { NoticeAndRemindersTable } from "../../components/NoticeAndRemindersTable";

export function Dashboard() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col lg="9" >
          <Row className="pt-4 mx-4">
            <InputGroup className="text-center">
              <Form.Control
                placeholder="Busca"
              />
              <Button variant="outline-secondary" size="lg" className="align-middle">
                <MagnifyingGlass size={24} weight="bold" />
              </Button>
            </InputGroup>
            <h1 className="fs-3 mt-4">Dashboard</h1>
          </Row>
          <Row className="pt-4 mx-4 gap-2">
            <Col className="h-100">
              <Card className="h-100" bg="secondary">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Card>
            </Col>
            <Col className="h-100" gap={2}>
              <Card className="h-100 mb-4" bg="secondary">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Card>
              <Card className="h-100" bg="secondary">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Card>
            </Col>
          </Row>
          <Row className="pt-4 mx-4">
            <h1 className="fs-3">Avisos e Lembretes</h1>
            <NoticeAndRemindersTable />
          </Row>
        </Col>
        <Col className="pt-2" style={{ backgroundColor: "#dedede", height: '80.5%' }}>
          <Calendar />
          <Container className="mt-5 p-0 pe-3" style={{ overflowY: 'scroll', height: '49%' }}>
            <AppointmentsList />
          </Container>
        </Col>
      </Row>
    </Container >
  )
}