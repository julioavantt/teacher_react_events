import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const HandleWithEvent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (Event) => setInputValue(Event.target.value);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Con función controladora de evento capturando interfaz Event</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Escribe</Form.Label>
          <Form.Control type="text" value={inputValue} onChange={handleChange} />
        </Form.Group>
      </Form>
      <hr />
      <mark>Valor actualizado del input: {inputValue}</mark>
      <hr />
      <Button variant="info" onClick={() => setInputValue("")}>
        Reset
      </Button>
    </Container>
  );
};
