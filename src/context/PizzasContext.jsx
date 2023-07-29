import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const pizs = async () => {
        const response = await axios.get("../pizzas.json");
        setPizzas(response.data);
    };

    useEffect(() => {
        pizs();
    }, []);



    return (
        <PizzaContext.Provider value={{ pizzas }}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaContext;


    

