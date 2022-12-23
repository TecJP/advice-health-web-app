import ptBR from 'date-fns/locale/pt-BR';
import { Dispatch, SetStateAction } from "react";
import { Container } from "react-bootstrap";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  date?: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

export function Calendar({ date, setDate }: CalendarProps) {
  return (
    <Container fluid className="pt-2 pe-2 ps-0 d-flex align-items-center justify-content-center ">
      <DayPicker
        className="m-0 mt-2"
        selected={date}
        onSelect={setDate}
        locale={ptBR}
        fixedWeeks
        showOutsideDays
        mode="single"
      />
    </Container>
  )
}