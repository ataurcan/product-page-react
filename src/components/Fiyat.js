
import React from "react";
import Taksit from "./Taksit";
import formatPrice from "../utils/formatPrice";
export default function Fiyat({price}) {

  const newPriceFormatted=formatPrice(price.newPrice);
  const oldPriceFormatted=formatPrice(price.oldPrice);
  
    return (
        <div className="fiyat-container">
            {price.oldPrice !== price.newPrice && price.oldPrice >price.newPrice ? (
                 <span className="fiyat">Fiyat: <span>{newPriceFormatted} TL</span> <span class="eskiFiyat">{oldPriceFormatted} TL</span> </span>
            ):(
                <span className="fiyat">Fiyat: <span>{newPriceFormatted}</span>  </span> 
            )}
       
           <Taksit marketPrice={price}/>
    </div>
        
    );
  }
  
  