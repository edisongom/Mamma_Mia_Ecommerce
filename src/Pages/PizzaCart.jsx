import React from "react";

import "../index.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const PizzaCart = () => {
    const navigate = useNavigate();
    const { cartItems, removePizzaFromCart, addPizzaQuantity, totalPrice } =
        useContext(CartContext);

    return (
        <div className="container">
            
            {/* loop through cart items, show only per item */}
            {cartItems.map((pizza, i) => (
                <div className="cart-container" key={i}>
                    <div className="pizza-details">
                        <img src={pizza.img} alt="pizza" />

                        <span>{pizza.name}</span>
                    </div>

                    <div className="pizza-price-quantity">
                        <span>
                            ${
                                //show individial total price for each item
                                pizza.price * pizza.quantity
                            }
                        </span>
                        {/* remove 1 item from pizza */}
                        <button id="remove-pizza" onClick={() => removePizzaFromCart(pizza)}>
                            {" "}
                            -{" "}
                        </button>
                        {/* add 1 item to pizza */}
                        <button id="add-pizza" onClick={() => addPizzaQuantity(pizza)}>
                            {" "}
                            +{" "}
                        </button>
                        
                    </div>
                </div>
            ))}

            <p id="cart-total">Total: ${totalPrice}</p>

            {/* buy button */}
            <button
                id="buy-btn"
                onClick={() => {
                    navigate("/checkout");
                }}
            >
                Buy
            </button>

        </div>
    );
};

export default PizzaCart;
