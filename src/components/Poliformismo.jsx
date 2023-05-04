import { useState } from "react";
import Container from "react-bootstrap/Container";

const ComponentChild = ({ as = "button", onClick }) => {
  const Tag = as;
  return <Tag onClick={onClick}>Click</Tag>;
};

export const Poliformismo = () => {
  const [componentType, setComponentType] = useState("div");
  
  const handleClick = () => alert("me clickeo mi hija")
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
      <ComponentChild as={componentType} onClick={handleClick} />
    </Container>
  );
};
