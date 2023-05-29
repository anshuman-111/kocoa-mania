import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch'
import ProductCard from './productCard'
const ProductDisplay = ({category}) => {

    console.log({category})
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][title][$eq]=${category}`)

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