
import React, {useState} from "react";
function Images({images}) {
      
      const [activeImageIndex, setActiveImageIndex]= useState(0);
      const handleClick = (e,index) =>  {
          setActiveImageIndex(index)
      }
      
    return (
        <div className="images">
            <div className="bigImage">
                <img src={images.productImage}  />
            </div>
           
        </div> 
    );
  }
  
  export default Images;