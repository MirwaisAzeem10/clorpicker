import React, { useEffect, useState } from "react";

function Plus() {
  const [counter, setCounter] = useState(60);
  const [miner, setMiner] = useState(0);
  const [inputValue, setInputvalue] = useState(0);
  const [nums, setNums] = useState(0);
  const [num, setNum] = useState(0);
  const [calculate, setCalculate] = useState("");

  const purple = "	#FF0000";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("click me");

  useEffect(() => {
    alert("done");
  }, [calculate]);

  const myCalculate = (e) => {
    let x = 60;
    const value = e.target.value;
    if (!value) return;
    if (value < x) {
      alert("yes that's right");
    } else {
      alert("That's Wrong");
    }
  };

  const bgChange = (e) => {
    console.log(e);
    let newBg = e.target.value;

    setBg(newBg);
    setName("Oh Yes!");
  };

  const bgBack = () => {
    setBg(purple);
    setName("Areeeeeee");
  };

  // const myincrement = () => {
  //   setCounter(counter + 10);
  // };

  // const myMyner = () => {
  //   setMiner(miner - 1);
  // };

  // const onChange = (event) => {
  //   const newValue = event.target.value;
  //   setInputvalue(newValue);
  // };

  return (
    <div style={{ backgroundColor: bg, width: "100vw", height: "100vh" }}>
      {/* <button onClick={bgChange} onDoubleClick={bgBack} onMouseOver={bgBack}>
        {name} Click
      </button> */}
      <input type={"color"} onChange={bgChange} />
      <input type="#" name="name" onBlur={myCalculate} />
      {/* {counter}
      <button onClick={myincrement}>Increment</button>
      {miner}
      <button onClick={myMyner}>Decrement</button>
      <input type="text" placeholder="Enter Your Name" onChange={onChange} />
      {inputValue}
      ///////////// useEffect//////
      <button onClick={() => setNum(num + 1)}>Amjad Ko dabao {num}</button>
      <button onClick={() => setNum(nums + 1)}>Amjad Ko chabao{nums}</button> */}
    </div>
  );
}

export default Plus;
