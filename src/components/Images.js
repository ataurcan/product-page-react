import BigImage from "./BigImage";
import SmallImages from "./SmallImages";
function Images({images}) {
  
    return (
        <div className="images">
           <BigImage bigImage={images.bigImage}/>
           <SmallImages thumbnail={images.thumbnails}/>
        </div>
  
    );
  }
  
  export default Images;