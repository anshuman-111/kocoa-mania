import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

const ProductDisplay = ({category}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [urlFilter, setUrlFilter] = useState("");

  useEffect(()=>{
    if(category !== ''){
      if (urlFilter === ""){
        setTimeout(()=>{
          setUrlFilter('populate=*')
        }, 500)
      } else {
        setUrlFilter(`populate=*&[filters][categories][title][$eq]=${category}`)
      }
    }
  },[category])
  // useEffect(()=>{
  //   if(category !== ''){
  //     setUrlFilter(`populate=*&[filters][categories][title][$eq]=${category}`)
  //   }else{
  //       setUrlFilter('populate=*')
  //       console.log(urlFilter)
  //     }
  //   },[category])



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
      console.log(urlFilter)
      fetchData();

  }, [urlFilter]);

    
  return (
    <section className="tab-content">
          <div className="tab-item active" data-tab="tab-1">
            <div className="products">
            {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <ProductCard item={item} key={item.id} />)}
            </div>
          </div>
    </section>

  )
}

export default ProductDisplay