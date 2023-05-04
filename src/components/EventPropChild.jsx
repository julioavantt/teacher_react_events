import Button from "react-bootstrap/Button";

export const EventPropChild = ({ clickeame }) => (

  //! Recibo la función como prop clickeame y la ejecuto
  <Button variant="info" onClick={clickeame}>
    Agregar 6
  </Button>
);
