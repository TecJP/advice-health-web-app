import ptBR from 'date-fns/locale/pt-BR';
import { useState } from "react";
import { Container } from "react-bootstrap";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <Container fluid className="pe-2 ps-0 d-flex align-items-center justify-content-center ">
      <DayPicker
        className="m-0 mt-2"
        selected={selectedDate}
        onSelect={setSelectedDate}
        locale={ptBR}
        fixedWeeks
        showOutsideDays
        mode="single"
      />
    </Container>
  )
}