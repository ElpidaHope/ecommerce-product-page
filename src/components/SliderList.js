import { nanoid } from 'nanoid';

const SliderList = ({images, imageNumber, showLightBox}) => {
  return (
    <div className="list-img-container">
            {images.map(image => (
              <img key={nanoid()} src={image} alt="" id='main-img' className={`list-img-${imageNumber}`} onClick={() => showLightBox()}/>
            ))}
          </div>

  )
}

export default SliderList