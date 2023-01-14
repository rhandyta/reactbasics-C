import React from "react";
import "./App.css";
import Card from "./Components/Card";
import Switch from "./Components/useState/Counter";
import Counter from "./Components/useState/Counter";
import UseStateObject from "./Components/useState/UseStateObject";

function App() {
    const hello = () => {
        console.log("Hello World");
    };

    return (
        <>
            <Switch />
        </>
    );
}

function Button(props) {
    return (
        <>
            <button onClick={props.hello}>Click</button>
        </>
    );
}

export default App;
