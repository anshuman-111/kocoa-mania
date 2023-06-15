import { useEffect, useState } from 'react'
//import shareAction from '../Hooks/shareAction'

const ProductCard = (props) => {
  const [cardSwiper, SetCardSwiper] = useState('swiper-slide card')
  useEffect(()=>{
    if(location.pathname.startsWith('/products')){
      SetCardSwiper('card')
    }
  },[])

  const canonical = document.querySelector("a[title=Share]");
  let title = props.item?.attributes?.title
  let text = 'HELLLO'
  let url = canonical ? `${import.meta.env.VITE_REACT_URL}/products/view/${props.item?.attributes?.title}` : 'https://www.google.com'
  const shareDetails = { url, title, text };

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share(shareDetails)
          .then(() =>
            console.log("Hooray! Your content was shared to tha world")
          );
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };
  
  const whatsappMsgString = `https://wa.me/${props.phone}/?text=Hello!. Could you please provide me with information on the options, flavors, sizes, and prices available for ${props.item?.attributes?.title}. LINK: ${import.meta.env.VITE_REACT_URL}/products/view/${props.item?.attributes?.title}`

  const whatsappShareString = `whatsapp://send?text=Check out ${props.item?.attributes?.title} at Kocoa Mania  LINK: ${import.meta.env.VITE_REACT_URL}/products/view/${props.item?.attributes?.title}`

  return (
    <figure className={cardSwiper}>
                <div className="card-image">
                  {props.item?.attributes?.isNew ? <span className="new-label">New</span> : <></> }
                 
                  <img
                    src={import.meta.env.VITE_STRAPI_UPLOAD_URL + props.item.attributes?.image?.data?.attributes?.url}
                    alt={props.item?.attributes?.title} 
                    loading="lazy"
                    onClick={()=> window.open(`/products/view/${props.item?.attributes?.title}`, '_blank', 'rel=noopener noreferrer')}
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
                    <a title="What'sApp" href={whatsappMsgString} target='_blank'>
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    {/* <a href={whatsappShareString} data-action='share/whatsapp/share' title="Share"  target='_blank'> */}
                    <a title='Share' onClick={handleSharing} target='_blank'>
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
  )
}
// Share button has to be platform agnostic
export default ProductCard