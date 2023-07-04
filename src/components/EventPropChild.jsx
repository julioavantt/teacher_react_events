import Button from "react-bootstrap/Button";

export const EventPropChild = (props) => {
  console.log(props);
  
  return (
    //! Recibo la función como prop clickeame y la ejecuto
    <Button variant="info" onClick={props.clickeame}>
      <span>Agregar 6</span>
    </Button>
  );
};
