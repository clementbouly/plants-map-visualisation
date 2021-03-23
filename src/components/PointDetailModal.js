import { Modal, Button, Image } from 'react-bootstrap';


function PointDetailModal(props) {
    const { name, img, description } = props.selectedpoint;
    return (
      <div>
        <Modal
          {...props}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Détails sur la plante
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{name}</h4>
            <p>
              {description}
            </p>
            <Image src={img} fluid></Image>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default PointDetailModal;