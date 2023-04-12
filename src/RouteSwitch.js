import React, {useState} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import clothesInfo from "./assets/clothesinfo";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Infobar from "./components/Infobar"
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Clothetype from "./components/clothetype";
import Product from "./components/product";
import ProductPage from "./components/productpage";
import CheckoutError from "./components/checkout";


function RouteSwitch () {

    const [cartItems, setCartItems] = useState([]);
    const [itemsTotal, setItemsTotal] = useState(0);
    const [inventory, setInventory] = useState(clothesInfo);

    console.log(inventory);

    function UpdateCart (item, size, value) {
        let valuenum = Number(value);
        setItemsTotal(itemsTotal + valuenum);

        let cartItemscopy = [...cartItems];

        for (const entry of cartItemscopy) {
            if (entry['item'] === item && entry['size'] === size) {
                entry['value'] = Number(entry['value']) + valuenum;
                setCartItems(cartItemscopy);
                return;
            }
        }

        cartItemscopy.push({'item': item, 'size': size, 'value': valuenum});
        setCartItems(cartItemscopy);
        return;
    }

    function AdjustCart (newval, index) {
        let cartItemscopy = [...cartItems];
        cartItemscopy[index]['value'] = newval;
        setCartItems(cartItemscopy);
    }

    function AdjustItemTot (change) {
        setItemsTotal(itemsTotal + change)
    }

    function RemoveItem (index) {
        setItemsTotal(itemsTotal - Number(cartItems[index]['value']))
        let cartItemscopy = [...cartItems];
        cartItemscopy.splice(index, 1);
        setCartItems(cartItemscopy);

    }

    return (
        <HashRouter basename="">
          <div className="App">
            <Navbar data={itemsTotal}/>
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
                cartItems = {cartItems}
                onQuantChange = {AdjustCart}
                onItemTotChange = {AdjustItemTot}
                onItemRemove = {RemoveItem}
                 />} />
                <Route path="/product" element={<Product />}>
                    <Route path=":itemId" element={<ProductPage inventory={inventory} onChange={UpdateCart}/>} />
                </Route>
                <Route path="/checkouterror" element={<CheckoutError />}/>
            </Routes>
            <Infobar />
          </div>
        </HashRouter>
    );
};

export default RouteSwitch;