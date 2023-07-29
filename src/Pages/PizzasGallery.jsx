import React, { useContext } from "react";

import PizzaContext from "../context/PizzasContext";
import PizzaCard from "../components/PizzaCard";

const PizzasGallery = () => {
    const { pizzas } = useContext(PizzaContext);

  

    return (
        <div>
            <div className="container">
                <div className="pizzas-container">
                {
                    pizzas.map((pizza) => (
                        <PizzaCard key={pizza.id} pizza={pizza} />
                    ))

                }
                </div>
                

            </div>
        </div>
    );
};

export default PizzasGallery;
