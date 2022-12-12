import React from "react";
import FoodItem from "./FoodItem";

export default function ListFood() {
    return (
        <>
            <div>
                <FoodItem harga="10000">Tempe </FoodItem>
                <FoodItem harga="9000">Tahu </FoodItem>
                <FoodItem harga="15000">Burcang </FoodItem>
                <FoodItem harga="5000">Samceng </FoodItem>
            </div>
        </>
    );
}
