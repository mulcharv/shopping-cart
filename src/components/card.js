import { Link } from 'react-router-dom';

function Card (props) {

    const item = props.value;
    const itemqlts = Object.values(item)[0];

    function hover(e) {
        console.log('hello')
        e.target.src =require(`../assets/${itemqlts['images'][1]}`)
        console.log(e.target.classList)
        e.target.classList.add('cardfade');
    }

    function hoverOut(e) {
        console.log('goodbye')
        e.target.src=require(`../assets/${itemqlts['images'][0]}`)
        e.target.classList.remove('cardfade');
        
    }


    return (
        <Link to={`/product/${Object.keys(item)[0]}`}>
        <div className="cardcont" id={Object.keys(item)[0]}>
            <div className="cardimgcont"><img src={require(`../assets/${itemqlts['images'][0]}`)} className="cardimg" alt="" onMouseOver={hover} onMouseOut={hoverOut}></img></div> 
            <div className="cardtitle linktextcolor">{itemqlts['title']}</div>
            <div className="cardprice linkpricecolor">{`$${itemqlts['price']}`}</div>
        </div>
        </Link>
    )
}

export default Card;