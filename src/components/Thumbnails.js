import { nanoid } from 'nanoid';

const Thumbnails = ({thumbnails, changeImage, imageNumber}) => {
  
  return (
    <div className="img-container">
          {thumbnails.map((thumbnail, index) => (
            <div key={nanoid()} 
              onClick={() => changeImage(index+1)} className={`img-active-cnt-${imageNumber === (index + 1) && imageNumber}`}>
              <img src={thumbnail} alt="" className={`img-active-${imageNumber === (index+1) && imageNumber}`}/>
                 
            </div>
            ))}
    </div>
  )
}

export default Thumbnails;