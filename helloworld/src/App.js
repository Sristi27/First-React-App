import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import Func from "./components/Func";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Hello World!
        </p>
        <Func />
        <Welcome name="prop1 with class" heroname="First Prop"></Welcome>
        <Func />
        {/* /* can be displayed many  times */}

        {/* props */}

        {/* passsing different names to a component to add Hello */}

        <Greet name="prop1" heroname="First Prop">
             <p> This is the children paragraph of first prop</p>
        </Greet>
        <Greet name="prop2" heroname="Second Prop"></Greet>


        <Message />
        <br/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;



//npm start
