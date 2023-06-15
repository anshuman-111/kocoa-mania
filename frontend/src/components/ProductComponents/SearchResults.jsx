
import ProductCard from './ProductCard'

const SearchResults = ({searchList}) => {
  return (
      <section className="tab-content">
        
          <div className="tab-item active" data-tab="tab-1">
            <div className="products">
            {searchList.length < 1 ? "No Results found" : 
            searchList.map((item) => <ProductCard item={item} key={item.id} />)
            }
            </div>
          </div>
    </section>   
  )
}

export default SearchResults