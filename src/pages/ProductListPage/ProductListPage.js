import './ProductListPage.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductsList from "../../components/ProductsList/ProductsList";
import {results as data} from '../../utils/mocks/en-us/products.json'
import Footer from "../../components/Footer/Footer";
import { useState, useEffect} from "react";
import Pagination from "../../components/Pagination/Pagination";

const ProductListPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [activeCategories, setActiveCategories] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleOnClick = (categoryId) => {
    if (activeCategories.includes(categoryId)) {
      const index = activeCategories.indexOf(categoryId);
      activeCategories.splice(index,1);
      setActiveCategories([...activeCategories])
    } else {
      setActiveCategories([...activeCategories, categoryId]);
    }
  };

  useEffect(() => {
    const filtered = data.filter((product) =>  activeCategories.includes(product.data.category.id));
    if (activeCategories.length > 0) {
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data);
    }
  }, [activeCategories]);

  return (
    <div className='products-list-page'>
      <Sidebar handleOnClick={handleOnClick} />
      <ProductsList products={filteredProducts} customClass='products-list-page-section' />
      <Pagination />
      <Footer />
    </div>
  )
};

export default ProductListPage;
