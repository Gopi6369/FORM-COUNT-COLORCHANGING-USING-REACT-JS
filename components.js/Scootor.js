import { useState } from "react"; // Import useState

function Scootor() {
  const [color, setColor] = useState("red");
  const [brand, setBrand] = useState("honda");
  const [model, setModel] = useState("Activa 6G");
  const [year, setYear] = useState("2020");
  const [scooter, setScooter] = useState({
    color: "red",
    brand: "honda",
    model: "activa 6G",
    year: "2020"
  });

function updateColor(){
  setScooter(previousState => {
    return{...previousState,color:"Blue"}
  })
}

// console.log('current satate',Scootor)
  
  return (
    <>
      <h1>My Scooter</h1>
      <p>Color: {Scootor.color}</p>
      <p>Model: {Scootor.model}</p>
      <p>Brand: {Scootor.brand}</p>
      <p>Year: {Scootor.year}</p>
      <button onclick={updateColor}>change color</button>
    </>
  );
}

export default Scootor;
