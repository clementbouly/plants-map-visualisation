import ImageMapper from 'react-image-mapper';
import './App.css';
import { useState } from "react";
import { Modal, Button, Image } from 'react-bootstrap';


function App() {

  const [message, setMessage] = useState("test")
  const [treeName, setTreeName] = useState("Allez y cliquez sur un arbre ! ")
  const [modalShow, setModalShow] = useState(false);
  const [selectedTree, setSelectedTree] = useState({ name: "" })

  const MAP = {
    name: "my-map",
    areas: [
      {
        name: "Cerisier du frouzet",
        shape: "circle",
        coords: [300, 100, 8],
        preFillColor: "blue",
        fillColor: "blue",
        img: "/img/cerisier.jpg",
        description:"Annonciateur du printemps et célébré au Frouzet pour sa beauté éphémère,le cerisier du Frouzet ou cerisier à fleurs est particulièrement décoratif.Il est le tout premier à fleurir au jardin.Il est remarquable par son abondante et majestueuse floraison printanière mais aussi par son écorce."
      },
      {
        name: "Arbre ou manu fait pipi",
        shape: "circle",
        coords: [120, 100, 8],
        preFillColor: "red",
        fillColor: "blue",
        img: "/img/statue-pipi.jpg",
        description:"L'urine peut s'utiliser diluée ou non en arrosage au pied des plantes. En la diluant dans de l'eau on évite le surdosage et sa répartition est plus facile. En général on dilue 1 litre d'urine dans 10 litres d'eau. Il vous suffit d'uriner dans un récipient quelconque puis de mélanger votre récolte avec de l'eau."
      },
      {
        name: "Arbre ou gaston fait pipi",
        shape: "circle", 
        coords: [566, 758, 8],
        preFillColor: "yellow", 
        fillColor: "blue", 
        img: "/img/chat-pipi.jpg", 
        description:"Qu'il s'agisse d'un parterre de fleurs, d'un jardin d'herbes aromatiques, de plantes en pot ou d'intérieur : de nombreux chats semblent être comme ensorcelés par les végétaux dans l'appartement, sur le balcon ou dans le jardin. Ils adorent jouer avec les branches, grignoter les feuilles vertes ou creuser dans le terreau moelleux."
      },

    ]
  }

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMessage(`You moved on the image at coords ${JSON.stringify(coords)} !`);
  }

  const showDetails = (evt) => {
    console.log("Vous avez cliqué sur l'arbre : ", evt.name);
    setTreeName("Vous avez cliqué sur : " + evt.name)
    setSelectedTree({ ...evt })
    setModalShow(true)
  }

  function MyVerticallyCenteredModal(props) {
    const { name, img, description } = props.selectedtree;
    return (
      <div>
        <Modal
          {...props}
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

  return (
    <div className="App">
      <div className="App-body">
        {message}
        <div className="mapImage" >
          <ImageMapper
            src={"/img/DomaineChanteCévennes.png"}
            map={MAP}
            onImageMouseMove={evt => moveOnImage(evt)}
            width={900}
            height={1000}
            onClick={evt => showDetails(evt)}
          />
        </div>

        <h1>{treeName}</h1>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          selectedtree={selectedTree}
        />
      </div>


    </div>
  );
}

export default App;
