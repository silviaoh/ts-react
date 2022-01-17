import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

interface submitTypes {
  name: string;
  description: string;
}

function App() {
  const onClick = (name: string) => {
    console.log(`say hello ${name}`);
    return true;
  };

  const onSubmit = (form: submitTypes) => {
    console.log(`form`, form);
  };
  return (
    <div className="App">
      <Greetings name="jisu" mark="yellow" optional onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
