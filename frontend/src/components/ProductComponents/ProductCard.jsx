import React from 'react'

const ProductCard = ({item}) => {
  
  function encodeImageToDataURL(imageUrl, callback) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();
  
    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
  
      const dataURL = canvas.toDataURL('image/jpeg'); // Adjust the MIME type if needed
      callback(dataURL);
    };
  
    image.src = imageUrl;
    image.crossOrigin = 'anonymous'
  }

  function sendImageToWhatsApp(imageDataUrl) {
    const phoneNumber = '919748217878'; // Replace with the desired phone number
  
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Check out this image!&source=${encodeURIComponent(imageDataUrl)}`;
  
    window.open(whatsappUrl);
  }

  const handleWhatsappClick = () => {
    encodeImageToDataURL(imgSrc, function(dataURL) {
      sendImageToWhatsApp(dataURL)
    })
  }
 
  var imgSrc = import.meta.env.VITE_STRAPI_UPLOAD_URL + item.attributes?.image?.data?.attributes?.url
  const whatsappMsgString = `https://wa.me/919748217878/?text=Hello!. Could you please provide me with information on the flavors, sizes, and prices available for ${item?.attributes?.title}`
  const whatsappImgString = `https://wa.me/919748217878/?text=`

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
                    <a title="What'sApp" onClick={handleWhatsappClick}>
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