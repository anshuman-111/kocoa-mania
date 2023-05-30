import React, { useState, useEffect } from 'react'
import useFetch from '../Hooks/useFetch'
import ProductCard from './productCard'
const ProductDisplay = ({category}, searchParams=null) => {
  
  const [urlFilter, setUrlFilter] = useState("populate=*");
  useEffect(()=>{
    if(Object.keys(category).length !== 0 || category !== ''){ 
      setUrlFilter(`populate=*&[filters][categories][title][$eq]=${category}`)
    }
  })
  const {data, loading, error} = useFetch(`/products?${urlFilter}`)
 
    console.log(category)
    
    
    console.log(urlFilter)
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

          {/* <div className="tab-item" data-tab="tab-2">
            <div className="products">
             <!-- Put the cards here --> 
            </div>
          </div>

          <div className="tab-item" data-tab="tab-3">
            <div className="products">
               <!-- Put the cards here --> 
            </div>
          </div> */}
    </section>

  )
}

export default ProductDisplay