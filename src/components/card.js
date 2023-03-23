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

    function cardpage(e) {

    }

    return (
        <div className="cardcont" id={Object.keys(item)[0]} onClick={cardpage}>
            <div className="cardimg"><img src={require(`../assets/${itemqlts['images'][0]}`)} className="cardimg" alt="" onMouseOver={hover} onMouseOut={hoverOut}></img></div> 
            <div className="cardtitle">{itemqlts['title']}</div>
            <div className="cardprice">{`$${itemqlts['price']}`}</div>
        </div>
    )
}

export default Card;