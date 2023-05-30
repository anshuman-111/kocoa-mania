import React from 'react'

const ProductCard = ({item}) => {
  

  return (
    <figure className="swiper-slide card">
                <div className="card-image">
                  
                  <img
                    src={import.meta.env.VITE_STRAPI_UPLOAD_URL + item.attributes?.image?.data?.attributes?.url}
                    alt={item?.attributes.title} 
                    loading="lazy"
                  />
                </div>
                <figcaption className="card-details">
                  <div className="card-details--info">
                    <h3>{item?.attributes?.title.toString().length > 20 ? item?.attributes?.title.slice(0,20).padEnd(24,' ...') : 
                    item?.attributes?.title
                    }</h3>
                    <p>{item?.attributes?.isNew}</p>
                  </div>
                  <div className="card-details--button">
                    <a href="https://wa.me/919876543210/?text=Hello! I'm inquiring about your cakes. Could you please provide me with information on the flavors, sizes, and prices available? " title="What'sApp">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    <a href="whatsapp://send?text=" data-acttion='share/whatsapp/share' title="Share">
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </a>
                    {/* Add NEW badge */}
                    {/* {item?.attributes.isNew && <div>NEW!</div>} */}
                  </div>
                </figcaption>
              </figure>
  )
}

export default ProductCard