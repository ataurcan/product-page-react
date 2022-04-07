import React from "react";


export default function Baslik({header}) {
    return (
        <div className="baslik-container">
        <h1>{header.productHeader}</h1>
        <span>{header.productName}</span>

    </div>
  
    );
  }
  
  