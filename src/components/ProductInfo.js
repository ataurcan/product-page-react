import Baslik from "./Baslik";
import Fiyat from "./Fiyat";
import Aciklama from "./Aciklama";
import Button from "./Button";
function ProductInfo({infos}) {
  
    return (
        <div className="productInfo">
          <Baslik header={infos}/>
          <Fiyat  price={infos}/>
          <Aciklama description={infos}/>
          <Button/>
        
    </div>
  
    );
  }
  
  export default ProductInfo;