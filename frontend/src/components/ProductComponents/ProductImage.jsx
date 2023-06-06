import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ProductImage = () => {
    const productName = useParams().productName
    const [query, setQuery] = useState(false)
    const [image, setImage] = useState('')
    const [heading, setHeading] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            if(productName.length > 0){
            
                const res = await axios.get(import.meta.env.VITE_REACT_APP_API_URL +  `/products?populate=*&[filters][title][$eq]=${productName}`, {
                    headers : {
                      Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN
                    }
                  });

                  setData(res.data.data)
                 
              };
            }
            
          fetchData();
            
     
          
    
      }, [productName]);

      useEffect(()=>{
        setImage(import.meta.env.VITE_STRAPI_UPLOAD_URL +  data[0]?.attributes?.image?.data?.attributes?.url),
        setHeading(data[0]?.attributes?.title),
        setQuery(true)
      },[data])

      console.log(import.meta.env.VITE_STRAPI_UPLOAD_URL +  data?.attributes?.image?.data?.attributes?.url)

      console.log(import.meta.env.VITE_REACT_APP_API_URL +  `/products?populate=*&[filters][title][$eq]=${productName}`)
      console.log(data)
  return (
    <div>
        {query ?  
        <>
            <h1>{heading}</h1>
            <img
            src={image}
            alt={heading} 
            loading="lazy"
                    />
        </>
             : <h1> LOADING ...</h1>
        }
      
    </div>
  )
}

export default ProductImage