import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { AppointmentsList } from "../../components/AppointmentsList";
import { Calendar } from "../../components/Calendar";
import { NoticeAndRemindersTable } from "../../components/NoticeAndRemindersTable";

export function Dashboard() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col lg="9" >
          <Row className="pt-4 mx-5">
            <InputGroup>
              <Form.Control
                placeholder="Busca"
              />
              <Button variant="secondary" size="lg">
                <MagnifyingGlass size={24} weight="bold" />
              </Button>
            </InputGroup>
            <h1 className="mt-4">Dashboard</h1>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row className="pt-4 mx-5">
            <NoticeAndRemindersTable />
          </Row>
        </Col>
        <Col className="pt-2 h-100" style={{ backgroundColor: "#dedede" }}>
          <Calendar />
          <AppointmentsList />
        </Col>
      </Row>
    </Container >
  )
}