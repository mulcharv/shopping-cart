import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

function Cart (props) {
    //Need an onChange for cartItems from RouteSwitch
    const cartItems = props.cartItems;
    console.log(cartItems)

    const cartTotalPrice = () => {
        let total=0;

        for (const product of cartItems) {
            total = total + (Object.values(product['item'])[0]['price']*product['value'])
        }

        return total;
    }


    const HandleQuantInc = param => {
            let incval = cartItems[param]['value'] + 1;
            props.onQuantChange(incval, param)
            props.onItemTotChange(1)
            cartTotalPrice();
        }

    const HandleQuantDec = param => {
            let decval = cartItems[param]['value'] - 1;
            if (decval === 0) {
                props.onItemRemove(param)
                cartTotalPrice();
                return;
            }
            props.onQuantChange(decval, param)
            props.onItemTotChange(-1)
            cartTotalPrice();
        }

    const RemoveCartTile = param => {
        props.onItemRemove(param)
        cartTotalPrice()
    }

    return (
        <div className="cartcont">
            <div className="carttitle">YOUR CART</div>
            <ul className="cartlist">
                {cartItems.map((product) => {
                    return (
                        <li key={uniqid()} className="carttilecont">
                    <div className="carttile">
                        <Link to={`/product/${Object.keys(product['item'])[0]}`}>
                        <img className='carttileimg' src={require(`../assets/${Object.values(product['item'])[0]['images'][0]}`)} alt=''></img>
                        </Link>
                        <div className='carttiletext'>
                        <div className='titleandsize'>
                        <Link className='linktextcolor' to={`/product/${Object.keys(product['item'])[0]}`}>
                        <div className='carttiletitle'>{Object.values(product['item'])[0]['title']}</div>
                        </Link>
                        <div className='carttilesize'> - {product['size']}</div>
                        </div>
                        </div>
                        <div className='carttileprice'>Unit Price: ${Object.values(product['item'])[0]['price']}</div>
                        <div className='quantcont'>
                            <button type='button' className='decbtn' onClick={() => HandleQuantDec(cartItems.indexOf(product))}>-</button>
                            <div className='quantdispl'>{product['value']}</div>
                            <button type="button" className='incbtn' onClick={() => HandleQuantInc(cartItems.indexOf(product))}>+</button>

                        </div>
                        <div className='cartfinalline'>
                        <div className='carttiletotal'>Item Total: ${(Object.values(product['item'])[0]['price'] * product['value']).toFixed(2)}</div>
                        <div className='carttileremove' onClick={() => RemoveCartTile(cartItems.indexOf(product))}><img className='cartgarbageimg' src={require('../assets/garbagetry4.svg').default} alt=''></img></div>
                        </div>
                    </div>
                        </li>
                    )
                })}
            </ul>
                <div className='cartfootercont'>
                        <div className='footertotaltitle'>Total</div>
                        <div className='subtotalcont'>
                            <div className='subtotaltitle'>Subtotal</div>
                            <div className='subtotalprice'>${(cartTotalPrice()).toFixed(2)}</div>
                        </div>
                        <div className='shippingcont'>
                            <div className='shippingtitle'>Shipping</div>
                            <div className='shippingprice'>FREE</div>
                        </div>
                        <div className='totalcont'>
                            <div className='totaltitle'>Total {`(Tax incl.)`}</div>
                            <div className='totalprice'>${(cartTotalPrice()).toFixed(2)}</div>
                        </div>
                        <Link to={'/checkouterror'}>
                        <button type='button' className='orderbtn'>ORDER</button>
                        </Link>
                        <div className='paymentcont'>
                            <div className='paymenttitle'>We Accept</div>
                            <div className='paymentoptions'><img className='paymentimg' src={require(`../assets/payment-icons.jpeg`)} alt=''></img></div>
                        </div>
                </div>
        </div>
    );
};

export default Cart;