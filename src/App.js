import React from 'react';
import "./App.css";
import Card from './Components/Card';

function App() {

  const hello = () => {
    console.log('Hello World')
  }

    return (
        <>
            <Button hello={hello}/>
        </>
    );
}

function Button (props) {
  return (
    <>
      <button onClick={props.hello}>Click</button>
    </>
  )
}

export default App;
