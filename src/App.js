import './App.css';
import { useState } from "react";
import ImageMapper from 'react-img-mapper';
import PointDetailModal from './components/PointDetailModal';
import CreatePointModal from './components/CreatePointModal';
import FAKE_MAP_POINTS from './constant'
import { Button } from 'react-bootstrap';


function App() {
  const MAP = FAKE_MAP_POINTS;

  const [message, setMessage] = useState("test")
  const [pointName, setPointName] = useState("Allez y cliquez sur un arbre ! ")
  const [modalShow, setModalShow] = useState({detailModal: false, createPointModal: false})
  const [selectedPoint, setSelectedPoint] = useState({ name: "" })
  const [mapPoints, setMapPoints] = useState(MAP)
  const [newPointCoordinates, setNewPointCoordinates] = useState({ X: "", Y: "" })



  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMessage(`You moved on the image at coords ${JSON.stringify(coords)} !`);
  }

  const showDetails = (evt) => {
    setPointName("Vous avez cliqué sur : " + evt.name)
    setSelectedPoint({ ...evt })
    setModalShow({...modalShow, detailModal: true})

  }

  const showCreationForm = (evt) => {
    setModalShow({...modalShow, createPointModal: true})
    setNewPointCoordinates({
      X: evt.nativeEvent.layerX,
      Y: evt.nativeEvent.layerY
    })
  }

  const handleNewPoint = (formResult) => {
    const {title, desc} = formResult
    const { X, Y } = newPointCoordinates

    const newPoint = {
      name: title,
      shape: "circle",
      coords: [X, Y, 8],
      preFillColor: "pink",
      fillColor: "pink",
      img: "/img/chat-pipi.jpg",
      description: desc
    }

    const mapPointsUpdated = [...mapPoints, newPoint];

    setMapPoints(mapPointsUpdated)
    setModalShow({...modalShow, createPointModal: false})
  }

  const filter = () => {
    setMapPoints(mapPoints.filter(point => point.preFillColor === "red"));
  }

  const showHoverDetails = (evt) => {
    console.log('evt :>> ', evt);
  }

  return (
    <div className="App">
      <div className="App-body">
        {message}
        <Button onClick={filter}>FILTER</Button>
        <div className="mapImage" >
          <ImageMapper
            src={"/img/DomaineChanteCévennes.png"}
            map={{name: "vegetal-visualisation", areas : mapPoints}}
            onMouseEnter={evt => showHoverDetails(evt)}
            onImageClick={evt => showCreationForm(evt)}
            onImageMouseMove={evt => moveOnImage(evt)}
            width={900}
            height={1000}
            onClick={evt => showDetails(evt)}
          />
        </div>

        <h1>{pointName}</h1>

        <PointDetailModal
          show={modalShow.detailModal}
          onHide={() => setModalShow({...modalShow, detailModal: false})}
          selectedpoint={selectedPoint}
        />
        <CreatePointModal
          show={modalShow.createPointModal}
          onHide={() => setModalShow({...modalShow, createPointModal: false})}
          createnewpoint={handleNewPoint}
        />
      </div>


    </div>
  );
}

export default App;
