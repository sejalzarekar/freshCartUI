import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5">
      <div className="container">
        
        {/* Top section: Logo and Social Icons */}
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <img 
              src="https://img.icons8.com/ios-filled/50/228B22/shopping-cart.png" 
              alt="FreshCart" 
              width="30" 
              height="30"
              className="me-2"
            />
            <h4 className="mb-0 fw-bold text-white">FreshCartt</h4>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
            <div className="social-icons">
              <i className="fab fa-facebook-f mx-2"></i>
              <i className="fab fa-twitter mx-2"></i>
              <i className="fab fa-instagram mx-2"></i>
            </div>
          </div>
        </div>

        {/* Middle section: Categories and links */}
        <div className="row mt-5">
          {/* Categories */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6 className="footer-heading">Categories</h6>
            <ul style={{color:" #7e9daa"}} className="list-unstyled">
              <li>Vegetables & Fruits</li>
              <li>Breakfast & instant food</li>
              <li>Bakery & Biscuits</li>
              <li>Atta, rice & dal</li>
              <li>Sauces & spreads</li>
              <li>Organic & gourmet</li>
              <li>Baby care</li>
              <li>Cleaning essentials</li>
              <li>Personal care</li>
            </ul>
          </div>

          {/* Second column of Categories */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <ul style={{color:" #7e9daa"}} className="list-unstyled mt-4 mt-md-0">
              <li>Dairy, bread & eggs</li>
              <li>Cold drinks & juices</li>
              <li>Tea, coffee & drinks</li>
              <li>Masala, oil & more</li>
              <li>Chicken, meat & fish</li>
              <li>Paan corner</li>
              <li>Pharma & wellness</li>
              <li>Home & office</li>
              <li>Pet care</li>
            </ul>
          </div>

          {/* Get to know us */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6 className="footer-heading">Get to know us</h6>
            <ul style={{color:" #7e9daa"}} className="list-unstyled">
              <li>Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Our Value</li>
            </ul>
          </div>

          {/* For Consumers */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6  className="footer-heading">For Consumers</h6>
            <ul style={{color:" #7e9daa"}} className="list-unstyled">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Product Returns</li>
              <li>FAQ</li>
              <li>Shop Checkout</li>
            </ul>
          </div>

          {/* Become a Shopper */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6 className="footer-heading">Become a Shopper</h6>
            <ul style={{color:" #7e9daa"}} className="list-unstyled">
              <li>Shopper Opportunities</li>
              <li>Become a Shopper</li>
              <li>Earnings</li>
              <li>Ideas & Guides</li>
              <li>New Retailers</li>
            </ul>
          </div>

          {/* Freshcart Programs */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6 className="footer-heading">Freshcart programs</h6>
            <ul style={{color:" #7e9daa"}} className="list-unstyled">
              <li>Freshcart programs</li>
              <li>Gift Cards</li>
              <li>Promos & Coupons</li>
              <li>Freshcart Ads</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

    {/* Bottom section: Copyright and Payment icons */}
        <div className="row mt-5 border-top border-secondary pt-3 align-items-center">
        <div className="col-md-6 text-light small mb-4">
            © 2022 - 2025 FreshCart eCommerce HTML Template. Powered by <span className="text-success hover-green">Codescandy</span>
        </div>

        <div className="col-md-6 text-md-end text-center payment-icons mb-4">
            <span className="me-2">Payment Partners:</span>
            <img src="/assets/icons/amazonpay.svg" alt="Amazon" height="20" className="mx-1" />
            <img src="/assets/icons/american-express.svg" alt="Amex" height="20" className="mx-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" height="20" className="mx-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" height="20" className="mx-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" height="20" className="mx-1" />
        </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
