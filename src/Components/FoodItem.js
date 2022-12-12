import React from "react";

export default function FoodItem({children, harga}) {
    return (
        <div className="food-list">
            <h4>Name: {children}</h4>
            <p>Harga: Rp. {harga}</p>
        </div>
    );
}
