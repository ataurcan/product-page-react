
import React from "react";


function Aciklama({description}) {
    return (
        <p className="aciklama"> <span className="aciklama-header">AÇIKLAMA :</span> {description.productDescription}  </p>

  
    );
  }
  
  export default Aciklama;