import { format, isAfter, parseISO } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { CaretLeft, CaretRight } from "phosphor-react";
import { HTMLAttributes, useCallback, useEffect, useMemo, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { DayModifiers, DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (selectedDate: Date) => void;
}

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <Container fluid className="mx-auto">
      <DayPicker
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