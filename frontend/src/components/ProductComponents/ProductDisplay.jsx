import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import Loader from '../HomeComponents/Loader';

const ProductDisplay = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [urlFilter, setUrlFilter] = useState("");

   useEffect(()=>{
    setTimeout(()=>{
      if(props.category === undefined){
          setUrlFilter('populate=*')
      }else{
       setUrlFilter(`populate=*&[filters][categories][title][$eq]=${props.category}`)
      }

    },100)
     
   },[props.category])
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(import.meta.env.VITE_REACT_APP_API_URL +  `/products?${urlFilter}`, {
          headers : {
            Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN
          }
        });
        setData(res.data.data);
      } catch (err) {
  
        setError(true);
      }
      setLoading(false);
    };
      
      fetchData();

  }, [urlFilter]);

    
  return (
      <section className="tab-content">
          <div className="tab-item active">
            <div className="products">
            {error
          ? "Something went wrong!"
          : loading
          ? " LOADING ..."
          : data?.map((item) => <ProductCard item={item} phone={props.phone} key={item.id} />)}
            </div>
          </div>
    </section>
  )
}

export default ProductDisplay