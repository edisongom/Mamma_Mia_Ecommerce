import "../index.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PizzasContext from "../context/PizzasContext";

import CartContext from "../context/CartContext";

const PizzaDetails = () => {
    const { pizzaId } = useParams();
    const { pizzas } = useContext(PizzasContext);
    const pizza = pizzas.find((pizza) => pizza.id === pizzaId);

    const { addPizzaToCart } = useContext(CartContext);

    return (
        pizza && (
            <div className="container">
                <div className="details-container">
                    <div className="pizza-img">
                        <img src={pizza.img} alt="pizza" />
                    </div>

                    <div className="pizza-view-details">
                        <h1>{pizza.name}</h1>

                        <p>{pizza.desc}</p>

                        <h4>Ingredientes</h4>
                        <ul>
                            {pizza.ingredients.map((ingredient, i) => (
                                <li key={i}>
                                    <span>🍕</span>
                                    {ingredient}
                                </li>
                            ))}
                        </ul>

                        <div className="details-footer">
                            <span>Precio</span>
                            <span className="price">${pizza.price}</span>
                            {/* add pizza to cart */}
                            <button  onClick={() => addPizzaToCart(pizza)} id="add-button">
                                Añadir <span>🛒</span>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default PizzaDetails;
