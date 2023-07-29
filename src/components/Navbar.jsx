import "../index.css";

import { NavLink } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../context/CartContext";



const Navbar = () => {
    const { totalPrice } = useContext(CartContext);
    return (
        <nav>
            <div className="container">
                <div className="nav-container">
                    <div className="brand">
                        <span>🍕</span>
                        <NavLink id="brand-text" to="/" end> Pizzeria Mamma mia </NavLink>
                    </div>

                    <div className="cart">
                        <span>🛒</span>
                        <NavLink id="navbar-total" to="/cart"> <p>${totalPrice}</p> </NavLink>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
