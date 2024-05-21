import PropTypes from "prop-types"
import { Button, Modal } from 'react-bootstrap';

const EliminarLibro = ({ show, onModalShowHandler }) => {

  const onClickHandler = () => {
    //props.onDeleteBookHandler();
    onModalShowHandler();
  };

  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          ¡Atención!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Está por eleiminar un libro de la lista.<br/>¿Realmente desea eliminarlo?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onModalShowHandler}>Cancelar</Button>
        <Button variant="danger" onClick={onClickHandler}>Sí, deseo eliminarlo</Button>
      </Modal.Footer>
    </Modal>
  );
}

EliminarLibro.propTypes = {
  show: PropTypes.bool,
  onModalShowHandler: PropTypes.func,
  //onDeleteBookHandler: PropTypes.func
};

export default EliminarLibro;