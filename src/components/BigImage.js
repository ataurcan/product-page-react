import React from "react";
import {product} from "../Product";

export default function BigImage({images}) {
    return (
        <div className="bigImage">
        <img src={product.images[0]}
            alt="fotoğraf makinesi"/>

    </div>
  
    );
  }
  
