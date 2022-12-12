import React from "react";
import "./App.css";
import Card from "./Components/Card";
import Counter from "./Components/Counter";

function App() {
    const hello = () => {
        console.log("Hello World");
    };

    return (
        <>
            <Counter />
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
