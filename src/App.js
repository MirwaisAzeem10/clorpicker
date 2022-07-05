import React, { useEffect, useState } from "react";
import Card from "./Card";
import Table from "./Table";
import Plus from "./plus";
import Next from "./Next";

function App() {
  const [name, setName] = useState("amjad");

  const onCardClick = () => {
    console.log("hey dear");
  };

  useEffect(() => {
    // setInterval(() => {
    //   setName("amjad" + Math.random());
    //   console.log(setName);
    // }, 1000);

    console.log("====================================");
  }, []);

  return (
    <div className="App">
      {/* <Table /> */}

      {/* <Card name={"amjad"} onClick={onCardClick} /> */}
      <Plus />

      {/* <Next /> */}
    </div>
  );
}

export default App;
