import React from "react";
import Taksit from "./Taksit";
import formatPrice from "../utils/formatPrice";

export default function Fiyat({price}) {

    const newPriceFormatted=formatPrice(price.productNewPrice);
    const oldPriceFormatted=formatPrice(price.productOldPrice);

    return (
        <div className="fiyat-container">
            <p className="fiyat">Fiyat:
                <span>{newPriceFormatted} TL </span>
                {price.productOldPrice !== price.productNewPrice && price.productOldPrice >price.productNewPrice &&
                    (
                        <span class="eskiFiyat">{oldPriceFormatted} TL</span>
                    )
                }
            </p>
            <Taksit marketPrice={price}/>
         </div>
    );
}
  
  