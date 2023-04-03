import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import uniqid from 'uniqid';

function ProductPage(props) {
    const inventory = props.inventory;
    console.log(inventory);

    const [imageTrack, setImageTrack] = useState(['shown', 'hidden'])
    const [sliderSelect, setSliderSelect] = useState(['chosen', 'not'])
    const [sizeSelect, setSizeSelect] = useState(['select', 'unselect', 'unselect'])
    const [val, setVal] = useState("1");

    let params = useParams();
    let itemId = params.itemId;
    
    function finditem(inventory, itemId) {
    for (const catg of inventory) {
        let clothetype = Object.keys(catg)[0];
        let clotheitems = Object.values(catg)[0];

        for (const clothe of clotheitems) {
            let clotheId = Object.keys(clothe)[0];
            if (clotheId === itemId) {
                return clothe;
            }
        }
    }
    }

    let item = finditem(inventory, itemId);
    let itemdtls = Object.values(item)[0];

    function HandleSlider(e) {
        if (e.target.classList.contains('slider1')) {
            setSliderSelect(['chosen', 'not'])
            if (imageTrack[0] === "hidden") {
                setImageTrack(['shown', 'hidden'])
            }
        }

        if (e.target.classList.contains('slider2')) {
            setSliderSelect(['not', 'chosen'])
            if (imageTrack[1] === "hidden") {
                setImageTrack(['hidden', 'shown'])
            }
    }
    }

    function HandleSize(e) {
        let size = e.target.textContent;
        if (size === "Small" && (e.target.classList.contains("unselect"))) {
            setSizeSelect(['select', 'unselect', 'unselect'])
        }
        if (size === "Medium" && (e.target.classList.contains("unselect"))) {
            setSizeSelect(['unselect', 'select', 'unselect'])
        }
        if (size === "Large" && (e.target.classList.contains("unselect"))) {
            setSizeSelect(['unselect', 'unselect', 'select'])
        }
    }

    function AddToCart() {
        let sizes = ['Small', 'Medium', 'Large'];
        let chosenselect = sizeSelect.indexOf('select');
        let chosensize = sizes[chosenselect];

        props.onChange(item, chosensize, val)

    }

    return (
            <div className="producttile">
                <div className="imgslidecont">
                    <img className={`productimg ${imageTrack[0]}`} src={require(`../assets/${itemdtls['images'][0]}`)} alt=''></img>
                    <img className={`productimg ${imageTrack[1]}`} src={require(`../assets/${itemdtls['images'][1]}`)} alt=''></img>
                    <div className="sliderscont">
                        <div className="imgcircle"><img className={`rapscircle slider1 ${sliderSelect[0]}`} src={require(`../assets/circleimg.svg`).default} alt='' onClick={HandleSlider}></img></div>
                        <div className="imgcircle"><img className={`rapscircle slider2 ${sliderSelect[1]}`} src={require(`../assets/circleimg.svg`).default} alt='' onClick={HandleSlider}></img></div>
                    </div>
                </div>
                <div className="productdtls">
                <div className="producttitle">{itemdtls['title']}</div>
                <div className="productprice">${itemdtls['price']}</div>
                <div className="productsizes">
                        <button className={`sizebtn ${sizeSelect[0]}`} onClick={HandleSize}>Small</button>
                        <button className={`sizebtn ${sizeSelect[1]}`} onClick={HandleSize}>Medium</button>
                        <button className={`sizebtn ${sizeSelect[2]}`} onClick={HandleSize}>Large</button>
                </div>
                <div className="productquantity">
                    <label className="quantlbl"> Select Quantity:
                            <input 
                            type="number" 
                            pattern="[0-9]*" 
                            className="quantinpt" 
                            value={val}
                            onChange={(e) => setVal((v) => (e.target.value !== "0" && e.target.validity.valid ? e.target.value : v))}
                            ></input>
                    </label>
                </div>
                <div className="actionbtns">
                <button type="button" className="cartbtn" onClick={AddToCart}>Add To Cart</button>
                <Link to={'/shop'}>
                <button className="backbtn" type="button"><img className="backbtnimg" src={require('../assets/backbtn.png')} alt=''></img>Store</button>
                </Link>
                </div>
                </div>
            </div>
    )
}

export default ProductPage;