import React from "react";
import {product} from "../Product";
function SmallImages({images}) {
    return (
        <div className="smallImages">
        <ul >
            <li><img class="foto" src={product.images[1]}
                    alt="fotoğraf makinesi"/></li>
            <li><img class="foto" src={product.images[2]}
                    alt="fotoğraf makinesi"/></li>
            <li><img class="foto" src={product.images[3]}
                    alt="fotoğraf makinesi"/></li>
        </ul>
    </div>
  
    );
  }
  
  export default SmallImages;