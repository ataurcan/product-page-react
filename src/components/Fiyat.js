
import React from "react";
import { product } from "../Product";
export default function Fiyat({newPrice},{oldPrice}) {
    return (
        <div className="fiyat-container">
        <span className="fiyat">Fiyat: <span>{product.newPrice}</span> <span class="eskiFiyat">{product.oldPrice}</span> </span>
        <span className="taksit">3 taksit X 596,67 TL <a class="taksit-yazı" href="#">Öne Çıkan Taksitler</a>
        </span>
    </div>
  
    );
  }
  
  