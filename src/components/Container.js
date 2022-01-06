import react from "react";
import Images from "./Images";
import ProductInfo from "./ProductInfo";
function Container({product}) {
   console.log(product.info);
   
   return(
      <div className="container">
         <Images images={product.images}/>
         <ProductInfo infos={product.info}/>
      </div>
   );
}


export default Container;
