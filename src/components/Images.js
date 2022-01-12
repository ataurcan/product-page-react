
import React, {useState} from "react";
function Images({images}) {
      
      const [activeImageIndex, setActiveImageIndex]= useState(0);
      const handleClick = (e,index) =>  {
          setActiveImageIndex(index)
      }
      
    return (
        <div className="images">
            <div className="bigImage">
            <img src={`./${images[activeImageIndex].bigImage}`}  />

            </div>
            <div className="smallImages">
            <ul>
            {images.map((image, index) => {
                
                return    <li onClick={(e) => handleClick(e, index)}><img src={`./${image.thumbnail}`} className="foto" alt="fotoğraf makinesi" /></li>    ;  
                   
            })}
                </ul>

            </div>
        </div>
        
    );
  }
  
  export default Images;