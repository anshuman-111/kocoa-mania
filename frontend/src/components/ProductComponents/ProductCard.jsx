import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const ProductCard = (props) => {
  const location = useLocation();
  const navigate = useNavigate()
  const [cardSwiper, SetCardSwiper] = useState('swiper-slide card')
  useEffect(()=>{
    if(location.pathname.startsWith('/products')){
      SetCardSwiper('card')
    }
  })
 
  const whatsappMsgString = `https://wa.me/${props?.phone}/?text=Hello!. Could you please provide me with information on the options, flavors, sizes, and prices available for ${props.item?.attributes?.title}. LINK: ${import.meta.env.VITE_REACT_URL}/products/view/${props.item?.attributes?.title}`


  const whatsappShareString = `whatsapp://send?text=Check out ${props.item?.attributes?.title} at Kocoa Mania  LINK: ${import.meta.env.VITE_REACT_URL}/products/view/${props.item?.attributes?.title}`

  return (
    <figure className={cardSwiper}>
                <div className="card-image">
                  {props.item?.attributes?.isNew ? <span className="new-label">New</span> : <></> }
                 
                  <img
                    src={import.meta.env.VITE_STRAPI_UPLOAD_URL + props.item.attributes?.image?.data?.attributes?.url}
                    alt={props.item?.attributes?.title} 
                    loading="lazy"
                    onClick={()=> navigate(`/products/view/${props.item?.attributes?.title}`)}
                  />
                  
                </div>
                <figcaption className="card-details">
                  <div className="card-details--info">
                    <h3>{props.item?.attributes?.title.toString().length > 20 ? props.item?.attributes?.title.slice(0,20).padEnd(24,' ...') : 
                    props.item?.attributes?.title
                    }</h3>
                    <p>{props.item?.attributes?.isNew}</p>
                  </div>
                  <div className="card-details--button">
                    <a title="What'sApp" href={whatsappMsgString}>
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    <a href={whatsappShareString} data-action='share/whatsapp/share' title="Share">
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
  )
}

export default ProductCard