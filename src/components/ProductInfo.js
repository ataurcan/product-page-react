import Baslik from "./Baslik";
import Fiyat from "./Fiyat";
import Aciklama from "./Aciklama";
import Button from "./Button";
function ProductInfo() {
    return (
        <div className="productInfo">
          <Baslik></Baslik>
          <Fiyat></Fiyat>
          <Aciklama></Aciklama>
          <Button></Button>
        
    </div>
  
    );
  }
  
  export default ProductInfo;