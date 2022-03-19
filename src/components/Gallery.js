import Thumbnails from './Thumbnails';
import SliderList from './SliderList';

import '../styles/Gallery.css';

const Gallery = ({images, thumbnails, changeImage, imageNumber, showLightBox, buttonChangeImage}) => {
 
  return (
      <div className='gallery-container'>
        <div className='gallery'>
          <SliderList images={images} imageNumber={imageNumber} showLightBox={showLightBox}/>
          <div className='slide-btn'>
            <div className="slider prev" onClick={e => buttonChangeImage(e.target.className)}></div>
            <div className="slider next" onClick={e => buttonChangeImage(e.target.className)}></div>
          </div>
        </div>
        <Thumbnails thumbnails={thumbnails} imageNumber={imageNumber} changeImage={changeImage}/>
      </div>
  )
}

export default Gallery