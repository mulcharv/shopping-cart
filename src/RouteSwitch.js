import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Jerseys from "./components/shopcatgs/jerseys";
import Shirts from "./components/shopcatgs/shirts";
import LongSleeve from "./components/shopcatgs/longsleeve";
import Shorts from "./components/shopcatgs/shorts";
import Hats from "./components/shopcatgs/hats";


function RouteSwitch () {

    const [cartItems, setCartItems] = useState([]);



    return (
        <BrowserRouter>
          <div className="App">
            <Navbar data={cartItems}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />}>
                    <Route path="/shop/" element={<Jerseys />} />
                    <Route path="/shop/shirts" element={<Shirts />} />
                    <Route path="/shop/longsleeve" element={<LongSleeve />} />
                    <Route path="/shop/shorts" element={<Shorts />} />
                    <Route path="/shop/hats" element={<Hats />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
    );
};

export default RouteSwitch;