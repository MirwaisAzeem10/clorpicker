import { useEffect, useRef } from "react";
import React from "react";

function Card({ name }) {
  useEffect(() => {
    console.log("hey Amjad");
  }, [name]);

  const printHello = () => {
    console.log("Helloo");
  };

  const divRef = useRef();

  const changeStyle = () => {
    console.log((divRef.current.style.color = "red"));
  };

  return (
    <div onClick={printHello}>
      Hello my name is {name}
      <button onClick={printHello}>Press</button>
    </div>
  );
}

export default Card;
