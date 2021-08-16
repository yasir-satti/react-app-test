import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";

// 2. example app:
// https://www.freecodecamp.org/news/react-examples-reactjs/

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App2() {
  return <Welcome name="Mr. Faisal Arkan" />;
  // return ( <div>Faisal Arkam</div> )
  // return ( <body><div><p>Faisal Akram</p></div></body> )
}

// ReactDOM.render(element, document.getElementById("root"));

export default App2;
