import React from "react";
import { v4 as idGenerator } from "uuid";

const HelloWorld = () => {
  return (
    <h2 onClick={alert("hola mundo")} className="App-link">
      Hello world
    </h2>
  );
};

export default HelloWorld;
