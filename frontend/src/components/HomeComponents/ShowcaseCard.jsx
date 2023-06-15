

const ShowcaseCard = ({item}) => {
  return (
    <figure className="swiper-slide">
          <img
            src={import.meta.env.VITE_STRAPI_UPLOAD_URL + item.attributes?.image?.data?.attributes?.url}
            alt="Product 1"
            loading="lazy"
          />
        </figure>
  )
}

export default ShowcaseCard