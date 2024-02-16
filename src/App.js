import "./App.css";
import { React, useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Test1");

  // called only when component is mounted
  useEffect(() => {
    console.log("component mounted");
  }, []);

  // called when count is incremented or count state is updated
  useEffect(() => {
    console.log("component mounted1");
  }, [count]);

  useEffect(() => {
    console.log("component mounted2");
  }, [data]);

  function updateState() {
    setCount(count + 1);
  }
  function updateData() {
    setData("Test2");
  }
  return (
    <>
      <h1>Learning usestate {count} times</h1>
      <h2>Data {data}</h2>
      <button onClick={updateState}>Click Me</button>
      <button onClick={updateData}>Click Me</button>
    </>
  );
}

export default App;
