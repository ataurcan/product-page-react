import React from "react";
import Taksit from "./Taksit";
import formatPrice from "../utils/formatPrice";

export default function Fiyat({price}) {

    const newPriceFormatted=formatPrice(price.newPrice);
    const oldPriceFormatted=formatPrice(price.oldPrice);

    return (
        <div className="fiyat-container">
            <p className="fiyat">Fiyat:
                <span>{newPriceFormatted} TL </span>
                {price.oldPrice !== price.newPrice && price.oldPrice >price.newPrice &&
                    (
                        <span class="eskiFiyat">{oldPriceFormatted} TL</span>
                    )
                }
            </p>
            <Taksit marketPrice={price}/>
         </div>
    );
}
  
  