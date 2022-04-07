import React,{useState,useEffect} from "react";
import axios from "axios";
import Images from "./Images";
import ProductInfo from "./ProductInfo";
function Container({product}) {
  const [data , setData] = useState([]);
  useEffect(()=>{ 
     const fetchData = async () => {
        const res = await axios.get('http://127.0.0.1:8080/api/products/1'); 
        setData(res.data);
      }
      fetchData();
   },[]);
      console.log(data);
   return(
      <>
         
         { 
         data.map(data => <div className="container">
         <Images images={data}/>
         <ProductInfo infos={data}/>
            </div> )
         }
      </>
   );
}


export default Container;