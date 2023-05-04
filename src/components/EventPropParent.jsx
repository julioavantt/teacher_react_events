import { useState } from "react";
import Container from "react-bootstrap/Container";

import { EventPropChild } from "./EventPropChild";

export const EventPropParent = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter((prev) => prev + 6);
  
  //! Paso la función al hija/o como prop "clickeame"
  
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Pasar controlador como prop</h1>
      <EventPropChild clickeame={handleClick} />
      <hr />
      <mark>Total: {counter}</mark>
    </Container>
  );
};
