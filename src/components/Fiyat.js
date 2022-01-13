
import React from "react";
import Taksit from "./Taksit";
import formatPrice from "../utils/formatPrice";

export default function Fiyat({price}) {

  const newPriceFormatted=formatPrice(price.newPrice);
  const oldPriceFormatted=formatPrice(price.oldPrice);

    const OldPrice=({price}) => {
      const _oldprice ="";
      {price.oldPrice !== price.newPrice && price.oldPrice >price.newPrice && (
          <span class="eskiFiyat">{oldPriceFormatted} TL</span>  
        )
      }
      return ( 
        _oldprice
      )
    };

    return (
        <div className="fiyat-container">
           
             <span className="fiyat">Fiyat: <span>{newPriceFormatted} TL</span> <OldPrice price={price} /></span>
           <Taksit marketPrice={price}/>
         </div>
        
    );
  }
  
  