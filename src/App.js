import React from 'react'
import Navbar from './components/navbar'
import LocationChecker from './components/LocationChecker'
import ShopByCategory from './components/shopByCategory'
import PopularProducts from './components/PopularProducts'
import CategoryCards from './components/CategoryCards'
import BestSellingProducts from './components/BestSellingProducts'
import AuthorshipBox from './components/AuthorshipBox'
import StoreLocation from './components/storeLocation'
import PopularRecipes from './components/PopularRecipes'
import WebFeatures from './components/WebFeatures'
import AreasWeDeliver from './components/AreaWeDeliver'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* Internal CSS */}
      <style>{`
        .buy-now-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #001E2B;
          padding: 12px 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          z-index: 1050;
          text-decoration: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .buy-now-btn:hover {
          background-color: #00FF7F;
          color: #001E2B !important;
        }

        .buy-now-btn i {
          margin-right: 8px;
        }
      `}</style>

      <Navbar />
      <LocationChecker />
      <ShopByCategory />
      <PopularProducts />
      <CategoryCards />
      <BestSellingProducts />
      <AuthorshipBox />
      <StoreLocation />
      <PopularRecipes />
      <WebFeatures />
      <AreasWeDeliver />
      <Footer />

      {/* Buy Now Button */}
      <a href="Navbar.jsx"
        className="buy-now-btn">
        <i className="fas fa-shopping-cart"></i> Buy Now
      </a>
    </>
  )
}

export default App
