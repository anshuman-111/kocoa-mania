import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'


const ProductDisplay = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


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