
import React from "react";
import { product } from "../Product";

function Aciklama() {
    return (
        <p className="aciklama"> <span className="aciklama-header">AÇIKLAMA :</span> {product.description}  </p>

  
    );
  }
  
  export default Aciklama;