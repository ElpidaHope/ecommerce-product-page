import iconMenu from '../images/icon-menu.svg';
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import iconClose from '../images/icon-close.svg';

import Cart from './Cart';

import '../styles/Header.css';
 

const Header = ({quantity, zeroQuantity, addToCart, handleCartVisibility, isCart, homepage}) => {
  
  return (
    <>
      <div className="header">
        <div className="left">
          <div className='logo'>
            <img src={iconMenu} alt="" id='menu'/>
            <img src={logo} alt="" />
          </div>
          <ul>
            <img src={iconClose} alt="" id='icon-close'/>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right">
          <div className='cart-no'>
            <img src={cart} alt="" onClick={() => handleCartVisibility()}/>
            {quantity !== 0 && addToCart ? <p>{quantity}</p> : null}
          </div>
          <img src={avatar} alt="" id='avatar'/>
        </div>
      </div>
      <Cart quantity={quantity} isCart={isCart} zeroQuantity={zeroQuantity} addToCart={addToCart} homepage={homepage}/>
    </>
  )
}

export default Header;