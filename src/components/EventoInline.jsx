import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const EventoInline = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Evento inline</h1>
      <Button variant="info" onClick={() => setCounter((prev) => prev + 1)}>
        Agregar 1
      </Button>
      <hr />
      <mark>Total: {counter}</mark>
    </Container>
  );
};
