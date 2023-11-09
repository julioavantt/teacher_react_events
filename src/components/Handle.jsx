import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const Handle = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter((prev) => prev + 3);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Con función controladora de evento</h1>
      <Button variant="info" onClick={handleClick}>
        Agregar 3
      </Button>
      <hr />
      <mark>Total: {counter}</mark>
    </Container>
  );
};
