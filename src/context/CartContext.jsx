import { createContext, useState, useEffect } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // add pizza to cart, if pizza already exists, increase quantity
    const addPizzaToCart = (pizza) => {
        const isPizzaInCart = cartItems.find((item) => item.id === pizza.id);
        if (isPizzaInCart) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === pizza.id
                        ? { ...isPizzaInCart, quantity: isPizzaInCart.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
        }
    };

    // remove one pizza quantity from cart
    const removePizzaFromCart = (pizza) => {
        const isPizzaInCart = cartItems.find((item) => item.id === pizza.id);
        if (isPizzaInCart.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== pizza.id));
        } else {
            setCartItems(
                cartItems.map((item) =>

                    item.id === pizza.id
                        ? { ...isPizzaInCart, quantity: isPizzaInCart.quantity - 1 }
                        : item  
                )
            );
        }
    };

    // add one pizza quantity to cart
    const addPizzaQuantity = (pizza) => {
        const isPizzaInCart = cartItems.find((item) => item.id === pizza.id);
        setCartItems(
            cartItems.map((item) =>
                item.id === pizza.id
                    ? { ...isPizzaInCart, quantity: isPizzaInCart.quantity + 1 }
                    : item
            )
        );
    };

    // set total price and total items
    useEffect(() => {
        let items = 0;
        let price = 0;

        cartItems.forEach((item) => {
            items += item.quantity;
            price += item.quantity * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cartItems, totalItems, totalPrice]);


    return (
        <CartContext.Provider
            value={{
                cartItems,
                addPizzaToCart,
                removePizzaFromCart,
                addPizzaQuantity,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );

}

export default CartContext;

   


