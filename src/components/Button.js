import React from 'react';



function Button() {
    
    const showAlert = () => {

        alert("Ürün sepete eklendi!");
    }

    return (
        <button onClick={showAlert} className="buton">Satın al</button>
  
    );
  }
  
  export default Button;

  