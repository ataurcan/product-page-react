
import React from "react";
import Taksit from "./Taksit";
export default function Fiyat({price}) {

   
    return (
        <div className="fiyat-container">
            {price.oldPrice !== price.newPrice && price.oldPrice >price.newPrice ? (
                 <span className="fiyat">Fiyat: <span>{price.newPrice}</span> <span class="eskiFiyat">{price.oldPrice}</span> </span>
            ):(
                <span className="fiyat">Fiyat: <span>{price.newPrice}</span>  </span> 
            )}
       
           <Taksit marketPrice={price}/>
    </div>
        
    );
  }
  
  