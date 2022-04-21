import React,{useState,useEffect} from "react";
import axios from "axios";
import Images from "./Images";
import ProductInfo from "./ProductInfo";

function Container({product}) {
  
   
  const [data , setData] = useState([]);
  useEffect(()=>{ 
     const fetchData = async () => {
        try{
        const res = await axios.get('http://172.18.0.3:8080/api/products/' + window.location.href.split("/")[3]); 
        setData(res.data);
        fetchData();
        }
        catch(error) {
           console.log(error);
        }
      }
      
   },[])
   
   ;
      console.log(window.location.href.split("/")[3]);
      
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