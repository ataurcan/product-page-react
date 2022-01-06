import React from "react";
import {product} from "../Product";
function SmallImages({thumbnail}) {
    return (
        <div className="smallImages">
        <ul >
            <li><img className="foto" src={thumbnail[0]}
                    alt="fotoğraf makinesi"/></li>
            <li><img className="foto" src={thumbnail[1]}
                    alt="fotoğraf makinesi"/></li>
            <li><img className="foto" src={thumbnail[2]}
                    alt="fotoğraf makinesi"/></li>
        </ul>
    </div>
  
    );
  }
  
  export default SmallImages;