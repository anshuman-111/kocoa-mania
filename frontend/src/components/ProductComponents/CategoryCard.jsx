import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CategoryCard = ({item}) => {
  const navigate = useNavigate()
    const catAttributes = [
        'card card-red reveal fade-left',
        'card card-light-red reveal fade-left',
        'card card-light-grey reveal fade-left',
        'card card-light-brown reveal fade-left',
        'card card-light-brown reveal fade-left',
        'card card-light-grey reveal fade-left',
        'card card-light-red reveal fade-left',
        'card card-red reveal fade-left',
        'card card-red reveal fade-left',
        'card card-light-red reveal fade-left',
        'card card-light-grey reveal fade-left',
        'card card-light-brown reveal fade-left'
     ]
  return (
      
          <div className={catAttributes[(item.id % 6) - 1]} onClick={()=> navigate(`/products/${item.attributes?.title}`)}>

            <div className="card-image">
    
              <img src={import.meta.env.VITE_STRAPI_UPLOAD_URL + item.attributes?.image?.data?.attributes?.url} alt="Product 5" />
    
            </div>
        
           
            <p title="Birthday">{item?.attributes?.title}</p>
            
          </div>
          
  )
}

export default CategoryCard