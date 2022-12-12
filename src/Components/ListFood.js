import React, { useState } from "react";
import FoodItem from "./FoodItem";

export default function ListFood() {
    const [initialFood, setInitialFood] = useState('')
    const [foods, setFoods] = useState([
        {
            id: Math.random() * 100 + 1,
            namaMakanan: "Tempe",
            harga: "10000"
        },
        {
            id: Math.random() * 100 + 1,
            namaMakanan: "Tahu",
            harga: "10001"
        },
        {
            id: Math.random() * 100 + 1,
            namaMakanan: "Susu Kedelai",
            harga: "10002"
        },
        {
            id: Math.random() * 100 + 1,
            namaMakanan: "Sambal Kacang",
            harga: "10003"
        },
    ])

    function foodHandler (e) {
        setInitialFood(e.target.value)
    }

    function submitHandler (e) {
        e.preventDefault();
        setFoods([...foods, {id: Math.random() * 100 + 1, namaMakanan: initialFood, harga: "15000"}])
        setInitialFood("")
    }


    return (
        <>
        <form onSubmit={submitHandler}>
            <label htmlFor="food">Nama Makanan: </label>
            <input id="food" type="text" onChange={foodHandler} value={initialFood} />
        </form>
            {
                foods.map((food, index) => {
                    return (
                        <FoodItem key={index} harga={food.harga}>{food.namaMakanan}</FoodItem>
                    )
                })
            }
        </>
    );
}
