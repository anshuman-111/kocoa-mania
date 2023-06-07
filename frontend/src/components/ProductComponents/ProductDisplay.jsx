import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'


const ProductDisplay = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [urlFilter, setUrlFilter] = useState("");
  const [category, setCategory] = useState()

  useEffect(()=>{
    setData(props.productList)
  }, [props.productList])
 

    
  return (
      <section className="tab-content">
          <div className="tab-item active">
            <div className="products">
            {error
          ? "Something went wrong!"
          : loading
          ? " LOADING ..."
          : data.map((item) => <ProductCard item={item} phone={props.phone} key={item.id} />)}
            </div>
          </div>
    </section>
  )
}

export default ProductDisplay