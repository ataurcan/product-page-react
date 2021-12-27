import React from "react";
import { product } from "../Product";

export default function Baslik({header},{name}) {
    return (
        <div className="baslik-container">
        <h1>{product.header}</h1>
        <span>{product.name}</span>

    </div>
  
    );
  }
  
  