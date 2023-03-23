import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import clothesInfo from "./assets/clothesinfo";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Clothetype from "./components/clothetype";


function RouteSwitch () {

    const [cartItems, setCartItems] = useState([]);
    const [inventory, setInventory] = useState(clothesInfo);

    console.log(inventory);

    return (
        <BrowserRouter>
          <div className="App">
            <Navbar data={cartItems}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />}>
                    <Route path="/shop/" element={<Clothetype catg={0} inventory={inventory} />} />
                    <Route path="/shop/shirts" element={<Clothetype catg={1} inventory={inventory} />} />
                    <Route path="/shop/longsleeve" element={<Clothetype catg={2} inventory={inventory} />} />
                    <Route path="/shop/shorts" element={<Clothetype catg={3} inventory={inventory} />} />
                    <Route path="/shop/hats" element={<Clothetype catg={4} inventory={inventory} />} />
                </Route>
                <Route path="/cart" element={<Cart
                inventory = {inventory}
                cartItems = {cartItems}
                 />} />
            </Routes>
          </div>
        </BrowserRouter>
    );
};

export default RouteSwitch;