import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const Handle = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter((prev) => prev + 3);
  
  const handleScroll = () => alert("SCROLLED");

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Con función controladora de evento</h1>
      <Button variant="info" onClick={handleClick}>
        Agregar 3
      </Button>
      <hr />
      <mark>Total: {counter}</mark>
      <hr />
      <div id="box" onScroll={handleScroll}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia ullam doloremque, expedita natus debitis voluptatibus nam tempore, fugiat sed in reprehenderit aspernatur provident reiciendis illum ipsam odit, impedit nostrum! Amet, qui unde sit officia quis
        minima quaerat ut, dolores deserunt nemo corrupti, aperiam totam nam eligendi fugit excepturi exercitationem ex? Unde rerum commodi vitae, quasi ducimus
      </div>
    </Container>
  );
};
