import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopCategory from './Pages/ShopCategory';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import LoginSignUpPage from './Pages/LoginSignUpPage';
import Footer from './Components/Footer';
import men_banner from './Assets/banner_men1.png';
import women_banner from './Assets/banner_women1.png';
import kid_banner from './Assets/banner_kids2.png';

function App() {
  return (
    <div className='overflow-hidden '>   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginSignUpPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
