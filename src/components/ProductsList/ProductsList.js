import './ProductsList.css';
import CardProduct from "../CardProduct/CardProduct";
import Pagination from "../Pagination/Pagination";


const ProductsList = ({customClass, products = []}) => {
  return (
    <div className={`featured-products-container ${customClass}`}>
      <h3>Featured Products</h3>
      <div className='featured-products'>
        {
          products.map(product => (
            <CardProduct
              image={product.data.mainimage.url}
              category={product.data.category.slug}
              alt={product.data.mainimage.alt}
              name={product.data.name}
              price={product.data.price}
              key={product.data.sku}
            />
          ))
        }
      </div>
      <Pagination />
    </div>

  )
}

export default ProductsList;
