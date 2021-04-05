import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from "react";

const FORM_DEFAULT_VALUE = { title: "", desc: "" }

function CreatePointModal(props) {
  const [formResult, setFormResult] = useState(FORM_DEFAULT_VALUE);

  const handleChange = (e) => {
    setFormResult({ ...formResult, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    props.createnewpoint(formResult);
    setFormResult(FORM_DEFAULT_VALUE);
  }

  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Créer un point
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Nom de l'arbre</Form.Label>
              <Form.Control 
                type="text"
                required 
                placeholder="Entrer un nom" 
                name="title" 
                value={formResult.title} 
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                required 
                rows={3} 
                placeholder="Entrer une description" 
                name="desc" value={formResult.desc} 
                onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreatePointModal;