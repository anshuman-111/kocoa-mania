
import CategoryCard from '../ProductComponents/CategoryCard'
import useFetch from '../../components/Hooks/useFetch'
import { Link } from 'react-router-dom'

const Categories = () => {
  
  const {data, loading, error } = useFetch('/categories?populate[0]=image&populate[1]=title&pagination[start]=0&pagination[limit]=12')

  return (
    // <!-- Categories -->
      <section className="section categories pt-7 pb-7" id="categories">
        <h2 className="heading heading-secondary text-white">
          Explore our Range of Confectionary
        </h2>
        <div className="container">
        {error
          ? "Oops! Something went wrong"
          : loading
          ? "Loading ..."
          : data?.map((item) => 
            <CategoryCard item={item} key={item.id} />
          )}

        </div>
        <div className="text-center pt-5">
        <Link to='/products' className="btn btn-primary btn-red"  title="View More">
          <i className="fa fa-plus-circle" aria-hidden="true"></i> View More
        </Link>
         
        </div>
      </section>
  )
}

export default Categories