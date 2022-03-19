import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart.svg';

import '../styles/Description.css';

const Description = ({quantity, reduceQuantity, addQuantity, handleAddToCart}) => {
  return (
    <div className='description'>
      <h3>Sneaker Company</h3>
      <h2>Fall Limited Edition <br/>Sneakers</h2>
      <p className='pr-decr'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className="price">
        <h2>$125.00 <span>50%</span></h2>
        <h4>$250.00</h4>
      </div>

      <div className="action-desc">
        <div className='quantity'>
          <img src={minus} alt="" onClick={() => reduceQuantity()}/>
          <p>{quantity}</p>
          <img src={plus} alt="" onClick={() => addQuantity()}/>
        </div>

        <button className='btn to-cart' onClick={() => handleAddToCart()}>
          <img src={cart} alt="" />
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  )
}

export default Description;