import {useState} from "react";
import '../../App.css';
import { Link } from 'react-router-dom';


function ShopNav (props) {

    const [chosencat, SetChosencat] = useState(['chosencat', 'notchosen', 'notchosen', 'notchosen', 'notchosen'])

    const ShopTextStyle = {
        color: '#BE0F34'
    };

    function HandleCatChange (e) {
        let catg = e.target.textContent;
        let categories = ['Jerseys', 'Shirts', 'Long Sleeve', 'Shorts', 'Hats'];

        for (const cat of categories) {
            if (cat === catg) {
                let catindex = categories.indexOf(cat);
                let catarray = ['notchosen', 'notchosen', 'notchosen', 'notchosen', 'notchosen'];
                catarray[catindex] = 'chosencat';
                SetChosencat(catarray)
            }
        }
    }



    return (
        <nav className="shopmenu">
            <div className="menutitle">CATEGORIES</div>
            <ul className="shoplinks">
                <Link style={ShopTextStyle} to= '/shop/'>
                <li className={chosencat[0]} onClick={HandleCatChange}>Jerseys</li>
                </Link>
                <Link style={ShopTextStyle} to= '/shop/shirts'>
                <li className={chosencat[1]} onClick={HandleCatChange}>Shirts</li>
                </Link>
                <Link style={ShopTextStyle} to='/shop/longsleeve'>
                <li className={chosencat[2]} onClick={HandleCatChange}>Long Sleeve</li>
                </Link>
                <Link style={ShopTextStyle} to= '/shop/shorts'>
                <li className={chosencat[3]} onClick={HandleCatChange}>Shorts</li>
                </Link>
                <Link style={ShopTextStyle} to='/shop/hats'>
                <li className={chosencat[4]} onClick={HandleCatChange}>Hats</li>
                </Link>
            </ul>
        </nav>
    )
}

export default ShopNav