import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PizzasGallery from "./Pages/PizzasGallery";
import PizzaDetails from "./Pages/PizzaDetails";
import { PizzaProvider } from "./context/PizzasContext";
import { CartProvider } from "./context/CartContext";
import PizzaCart from "./Pages/PizzaCart";
import PageNotFound from "./Pages/PageNotFound";
function App() {
    return (
        <div className="App">
            <PizzaProvider>
                <CartProvider>
                    <Router>
                        <Navbar />
                        <Header />
                        <Routes>
                            <Route path="*" element={<PageNotFound />} />
                            <Route path="/" element={<PizzasGallery />} />
                            <Route
                                path="/pizza/:pizzaId"
                                element={<PizzaDetails />}
                            />
                            <Route path="/cart" element={<PizzaCart />} />
                        </Routes>
                        <Footer />
                    </Router>
                </CartProvider>
            </PizzaProvider>
        </div>
    );
}

export default App;
