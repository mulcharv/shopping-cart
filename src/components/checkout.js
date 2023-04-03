import { Link } from 'react-router-dom'

const CheckoutError = () => {
    return (
    <div className='checkouterrorcont'>
    <div className='blockgif'><img className='doubleblockgif' src={require('../assets/rapsdoubleblock.gif')} alt='loading...'></img></div>
    <div className='errorexpl'>This is a fake store created for my portfolio</div>
    <Link to={'/shop'}>
    <button className='errorbtn'>Shop</button>
    </Link>
    </div>
    )
}

export default CheckoutError;