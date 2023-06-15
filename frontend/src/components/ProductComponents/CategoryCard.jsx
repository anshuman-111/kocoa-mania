
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({item}) => {
  const navigate = useNavigate()
    const catAttributes = [
      'card card-red reveal fade-left',
      'card card-light-red reveal fade-left',
      'card card-light-brown reveal fade-left',
      'card card-light-grey reveal fade-left',   
       ]
  return (
      
          <div className={catAttributes[(item.id % 4)]} onClick={()=> navigate(`/products/${item.attributes?.title}`)}>

            <div className="card-image">
    
              <img src={import.meta.env.VITE_STRAPI_UPLOAD_URL + item.attributes?.image?.data?.attributes?.url} alt={item.attributes?.title} />
    
            </div>
        
           
            <a title={item?.attributes?.title}>{item?.attributes?.title}</a>
            
          </div>
          
  )
}

export default CategoryCard