import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/ProductsList/ProductsList";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Button from '../components/Button/Button';
import {results as featuredProductsData} from '../utils/mocks/en-us/featured-products.json';

import {results as featuredBanners} from '../utils/mocks/en-us/featured-banners.json';

const HomePage = (props) => {

  return (
    <>
      <ImageSlider featuredBanners={featuredBanners} />
      <Categories />
      <FeaturedProducts products={featuredProductsData}/>
      <Button onClick={() => props.onClickToggleMenu('productList')} customClass='featured-button pointer' label='View all products' />
      <Footer />
    </>
  )
}

export default HomePage;
