import React from "react";
import '../../App.css';
import { Link } from 'react-router-dom';


function ShopNav (props) {

    const ShopTextStyle = {
        color: '#BE0F34'
    };

    return (
        <nav className="shopmenu">
            <div className="menutitle">CATEGORIES</div>
            <ul className="shoplinks">
                <Link style={ShopTextStyle} to= '/shop/'>
                <li>Jerseys</li>
                </Link>
                <Link style={ShopTextStyle} to= '/shop/shirts'>
                <li>Shirts</li>
                </Link>
                <Link style={ShopTextStyle} to='/shop/longsleeve'>
                <li>Long Sleeve</li>
                </Link>
                <Link style={ShopTextStyle} to= '/shop/shorts'>
                <li>Shorts</li>
                </Link>
                <Link style={ShopTextStyle} to='/shop/hats'>
                <li>Hats</li>
                </Link>
            </ul>
        </nav>
    )
}

export default ShopNav