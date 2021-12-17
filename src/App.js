import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage';
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import {useState} from "react";

const PAGES = {
  home: 'home',
  productList: 'productList'
}

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.home);
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  const onClickSetPage = (page = 'home') => {
      setCurrentPage(page)
  }

  return (
    <div className="App">
      <Header onClickToggleMenu={onClickSetPage} />
      {
        currentPage === 'home' ? (
          <HomePage onClickToggleMenu={onClickSetPage} />
        ) : (
          <ProductListPage />
        )
      }
      <Footer/>
    </div>
  );
}

export default App;
