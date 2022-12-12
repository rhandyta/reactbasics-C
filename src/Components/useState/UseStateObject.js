import React, { useState } from "react";

export default function UseStateObject() {
    const [pesan, setPesan] = useState({
        pesan1: "Saya belum belajar ReactJs",
        pesan2: "Saya belum belajar JavaScript",
    });

    const updatePesan1 = () => {
        setPesan({ ...pesan, pesan1: "Saya sudah belajar ReactJS" });
        console.log(pesan);
    };

    const updatePesan2 = () => {
        setPesan({ ...pesan, pesan2: "Saya sudah belajar JavaScript" });
        console.log(pesan);
    };

    return (
        <>
            <h1>Pesan 1: {pesan.pesan1}</h1>
            <h1>Pesan 2: {pesan.pesan2}</h1>
            <div>
                <button onClick={updatePesan1}>Update Pesan 1</button>
                <button onClick={updatePesan2}>Update Pesan 2</button>
            </div>
        </>
    );
}
