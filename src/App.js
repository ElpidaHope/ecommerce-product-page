import { useState, useCallback } from 'react';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Description from './components/Description';
import LightBox from './components/LightBox';

import './App.css';

import img1 from './images/image-product-1.jpg';
import img2 from './images/image-product-2.jpg';
import img3 from './images/image-product-3.jpg';
import img4 from './images/image-product-4.jpg';

import thum1 from './images/image-product-1-thumbnail.jpg';
import thum2 from './images/image-product-2-thumbnail.jpg';
import thum3 from './images/image-product-3-thumbnail.jpg';
import thum4 from './images/image-product-4-thumbnail.jpg';


function App() {
  const [imageObject] = useState({
    images: [img1, img2, img3, img4],
    thumbnails : [thum1, thum2, thum3, thum4]
  })

  const [imageNumber, setImageNumber] = useState(1);
  const changeImage = useCallback((value) => {
    document.getElementsByClassName('img-active-cnt-')
    setImageNumber(value)
  }, [])

  const [isLightBox, setIsLightBox] = useState(false)
  const setLightBoxVisibility = () => {
    setIsLightBox(state => !state)
  }

  const buttonChangeImage = useCallback((className) => {
    if (className.includes('prev')) {
      setImageNumber(state => state > 1 ? state - 1 : 4)
    }

    if (className.includes('next')) {
      setImageNumber(state => state < 4 ? state + 1 : 1)
    }
  }, [])

  const [quantity, setQuantity] = useState(0)
  const reduceQuantity = () => {
    if (quantity > 0){
      setQuantity(quantity - 1)
    }
  }
  const addQuantity = () => {
    setQuantity(quantity + 1)
    if (quantity === 0) {
      setAddToCart(false)
    }
  }

  const zeroQuantity = () => {
    setQuantity(0)
  }

  const [isCart, setIsCart] = useState(false)
 
  const handleCartVisibility = () => {
    setIsCart(state => !state)
  }

  const [addToCart, setAddToCart] = useState(false)
  const handleAddToCart = () => {
    setAddToCart(true)
  }

  const homepage = () => {
    handleCartVisibility()
    zeroQuantity()
  }
 


  return (
    <>
      <div className="container">
        <Header quantity={quantity} zeroQuantity={zeroQuantity} addToCart={addToCart} handleCartVisibility={handleCartVisibility} isCart={isCart} homepage={homepage}/>
        <div className="content">
          <Gallery images={imageObject.images} thumbnails={imageObject.thumbnails} imageNumber={imageNumber} changeImage={changeImage} showLightBox={setLightBoxVisibility} buttonChangeImage={buttonChangeImage}/>
          <Description quantity={quantity} reduceQuantity={reduceQuantity} addQuantity={addQuantity} handleAddToCart={handleAddToCart}/>
        </div>
      </div>
      <LightBox images={imageObject.images} thumbnails={imageObject.thumbnails} imageNumber={imageNumber} changeImage={changeImage} isLightBox={isLightBox} removeLightBox={setLightBoxVisibility} buttonChangeImage={buttonChangeImage}/>

    </>

  );
}

export default App;
