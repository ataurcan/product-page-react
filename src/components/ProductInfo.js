import Baslik from "./Baslik";
import Fiyat from "./Fiyat";
import Aciklama from "./Aciklama";
import Button from "./Button";
function ProductInfo({infos}) {
  console.log(infos.header);
    return (
        <div className="productInfo">
          <Baslik header={infos.title}/>
          <Fiyat  price={infos.price}/>
          <Aciklama description={infos.description}/>
          <Button/>
        
    </div>
  
    );
  }
  
  export default ProductInfo;