import React from 'react';



function Taksit({marketPrice}) {
    var roundPrice=  Math.round(marketPrice.productNewPrice/3*100)/100;
    return (
        <span className="taksit">3 taksit X {roundPrice} TL <a className="taksit-yazı" href="#">Öne Çıkan Taksitler</a>
        </span>
  
    );
  }
  
  export default Taksit;