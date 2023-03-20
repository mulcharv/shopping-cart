import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';


function Navbar (props) {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className="sitenav">
            <div className="titlecont">
            <div className="sitetitle">
                R A P T O R S
            </div>
            <div className="subtitle">
                ATHLETICS
            </div>
            </div>
            <ul className="sitelinks">
                <Link style={navStyle} to= '/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to= '/about'>
                <li>About</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/cart'>
                <li className="cartlink">
                    <div>Cart</div>
                    <div className="cartnavdisp">
                        <img src={require('../assets/goldclawlogo.svg').default} alt='' style={{position: 'absolute'}} className="cartimg"/>
                        <div className="cartimgtext" style={{position: 'relative', top: '0.1vh', left: '2.7vw'}}>5</div>
                    </div>
                </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar