import { useState } from "react";
import Container from "react-bootstrap/Container";

const ComponentChild = ({ mas = "button", conClick }) => {
  const Tag = mas; // a
  return <Tag onClick={conClick}>Click</Tag>;
};

export const Polimorfismo = () => {
  const [componentType, setComponentType] = useState("div");

  const handleClick = () => alert("me clickeo mi hija");

  return (
    <Container className="mt-4">
      <select
        value={componentType}
        onChange={(event) => setComponentType(event.target.value)}
      >
        <option value="a">A</option>
        <option value="div">DIV</option>
        <option value="button">BUTTON</option>
      </select>
      <ComponentChild mas={componentType} conClick={handleClick} />
    </Container>
  );
};
