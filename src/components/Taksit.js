import React from 'react';



function Taksit({marketPrice}) {
    var intPrice=parseInt({marketPrice})
    return (
        <span className="taksit">3 taksit X {intPrice/3}<a className="taksit-yazı" href="#">Öne Çıkan Taksitler</a>
        </span>
  
    );
  }
  
  export default Taksit;