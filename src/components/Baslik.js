import React from "react";


export default function Baslik({header}) {
    return (
        <div className="baslik-container">
        <h1>{header.header}</h1>
        <span>{header.name}</span>

    </div>
  
    );
  }
  
  