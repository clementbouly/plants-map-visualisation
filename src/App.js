import ImageMapper from 'react-image-mapper';
import './App.css';
import { useState } from "react";
 

function App() {

  const [message, setMessage] = useState("test")
  const [treeName, setTreeName] = useState("Allez y cliquez sur un arbre ! ")


  const MAP = {
    name: "my-map",
    areas: [
      { name: "cerisier", shape: "circle", coords: [300,100,8], preFillColor: "blue", fillColor: "blue" },
      { name: "arbre ou manu fait pipi", shape: "circle", coords: [120,100,8], preFillColor: "red", fillColor: "blue" },
      { name: "arbre ou gaston fait pipi", shape: "circle", coords: [1132,1595,8], preFillColor: "yellow", fillColor: "blue" },

    ]
  }

  const moveOnImage = (evt) => {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		setMessage(`You moved on the image at coords ${JSON.stringify(coords)} !`);
	}

  const showDetails = (evt) => {
    console.log("Vous avez cliqué sur l'arbre : ", evt.name);
    setTreeName("Vous avez cliqué sur : " + evt.name)
  }

  return (
    <div className="App">
      {message}
        <ImageMapper 
          src={"/img/DomaineChanteCévennes.png"} 
          map={MAP}
          onImageMouseMove={evt => moveOnImage(evt)}
          width={1800}
          height={2100}
          onClick={evt => showDetails(evt)}
          />
        <h1>{treeName}</h1>

    </div>
  );
}

export default App;
