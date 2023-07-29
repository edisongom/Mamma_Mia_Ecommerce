import "../index.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";


const PizzaCard = (pizza) => {
    const navigate = useNavigate();

    const { addPizzaToCart } = useContext(CartContext);

    return (
        <div className="card" >
            <div className="card-image">
                <img src={pizza.pizza.img} alt="pizza" />
            </div>
            <div className="card-content">
                <h1 id="card-pizza-name">{pizza.pizza.name}</h1>

                <h4>Ingredientes</h4>
                <ul>
                    {pizza.pizza.ingredients.map((ingredient, i) => (
                        <li key={i}><span>🍕</span>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="card-footer">
                <p className="price">${pizza.pizza.price}</p>
                <button onClick={() => navigate(`/pizza/${pizza.pizza.id}`)} id="view-more">Ver Mas <span>👀</span></button>
                <button onClick={() => addPizzaToCart(pizza.pizza)} id="add-to-cart">Añadir <span>🛒</span></button>
            </div>
        </div>
    );
};

export default PizzaCard;
