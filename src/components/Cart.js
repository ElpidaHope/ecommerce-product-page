import '../styles/Cart.css';

import img from '../images/image-product-1-thumbnail.jpg';
import del from '../images/icon-delete.svg';

const Cart = ({quantity, isCart, zeroQuantity, addToCart, homepage}) => {
  return (
    <div className={`cart ${isCart ? `show` : null}`}>
      <div className='top'>
        <p>Cart</p>
      </div>
      {quantity !== 0 && addToCart ? (
        <>
          <div className='middle'>
            <div>
              <img src={img} alt="" id='cart-img'/>
            </div>
            <div className='cart-price'>
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x {quantity} <span>${(125.00 * quantity).toFixed(2)}</span></p>
            </div>
            <div>
              <img src={del} alt="" onClick={() => zeroQuantity()} id='del-cart'/>
            </div>
          </div>
          <button className='btn' onClick={() => homepage()}>
          Checkout
          </button>
        </>   
      )
      :
      <p className='empty-cart'>Your cart is empty.</p>
      }
    </div>
  )
}

export default Cart;