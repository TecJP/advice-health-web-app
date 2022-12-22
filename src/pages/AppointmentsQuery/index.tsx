import { Funnel, MagnifyingGlass } from "phosphor-react";
import { Button, Col, Container, Form, InputGroup, Row, Table } from "react-bootstrap";
import { DataTable } from "../../components/DataTable";

export function AppointmentsQuery() {
  return (
    <Container className="h-100 bg-blue" fluid>
      <Row className="pt-4 mx-4 align-items-center justify-content-between">
        <Col>
          <InputGroup className="text-center">
            <Form.Control
              placeholder="Busca"
            />
            <Button variant="outline-secondary" className="d-flex align-items-center justify-content-center">
              <MagnifyingGlass size={24} weight="bold" />
            </Button>
          </InputGroup>
        </Col>
        <Col className="pe-0 d-flex justify-content-end">
          <Button variant="outline-transparent" className="border-0 d-flex align-items-center justify-content-between">
            <Funnel size={24} weight="bold" />
            Filtros Avançados
          </Button>
        </Col>
      </Row>
      <Row className="pt-4 mx-4">
        <DataTable />
      </Row>
    </Container>
  )
}