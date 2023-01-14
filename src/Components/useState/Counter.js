import React, { useEffect, useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Kode render diawal");
        return () => {
            console.log("Component dihilangkan");
        };
    }, []);

    const increment = () => {
        setCounter((prev) => prev + 1);
    };

    const decrement = () => {
        if (!counter <= 0) {
            setCounter(counter - 1);
        }
        return false;
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={decrement}>Decrement</button>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default function Switch() {
    const [isVisible, setIsVisible] = useState(true);

    function switchHandler() {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <button onClick={switchHandler}>Visible</button>
            </div>
            {isVisible && <Counter />}
        </>
    );
}
