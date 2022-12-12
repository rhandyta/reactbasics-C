import React from "react";
import ListFood from "./ListFood";

export default function Card() {
    return (
        <>
            <div className="card">
                <h1 className="title">Daftar Makanan Kacang.</h1>
                <ListFood />
            </div>
        </>
    );
}
