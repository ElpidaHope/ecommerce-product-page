import Thumbnails from './Thumbnails';
import SliderList from './SliderList';
import close from '../images/icon-close.svg';

import '../styles/LightBox.css';

const LightBox = ({images, thumbnails, imageNumber, changeImage, isLightBox, removeLightBox, buttonChangeImage}) => {
  
  return (
    <div className={`lightbox-bg ${isLightBox ? `show` : null}`}>
      <div className='lightbox'>
        <img  src={close} alt="" id='close' onClick={() => removeLightBox()}/>
        <div>
          <SliderList images={images} imageNumber={imageNumber}/>
          <div className='lb-slider-btn'>
            <div className="slider prev" onClick={(e) => buttonChangeImage(e.target.className)}></div>
            <div className="slider next" onClick={e => buttonChangeImage(e.target.className)}></div>
          </div>

        </div>

        <div className='thumbnail-container'>
          <Thumbnails thumbnails={thumbnails} changeImage={changeImage} imageNumber={imageNumber}/>
        </div>


      </div>
    </div>
  )
}

export default LightBox