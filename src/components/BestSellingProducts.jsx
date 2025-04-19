import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";   

import "swiper/css";
import "swiper/css/navigation";
import "./BestSellingProducts.css";


const products = [
  {
    id: 1,
    name: "Cadbury 5 Star Chocolate",
    image: "/assets/bestSell/cadbury.jpg",
    rating: 4.3,
    reviews: 4,
    price: 35,
    oldPrice: 35,
    discount: "Sale",
    stock: true,
  },
  {
    id: 2,
    name: "Onion Flavour Potato",
    image: "/assets/bestSell/onion.jpg",
    rating: 4.3,
    reviews: 4,
    price: 3,
    oldPrice: 5,
    discount: "40%",
    stock: true,
  },
  {
    id: 3,
    name: "Salted Instant Popcorn",
    image: "/assets/bestSell/salted.jpg",
    rating: 3.3,
    reviews: 3,
    price: 11.7,
    oldPrice: 18,
    discount: "35%",
    stock: false,
  },
  {
    id: 4,
    name: "Cadbury 5 Star Chocolate",
    image: "/assets/bestSell/cadbury.jpg",
    rating: 4.3,
    reviews: 4,
    price: 35,
    oldPrice: 35,
    discount: "Sale",
    stock: true,
  },
  {
    id: 5,
    name: "Haldiram's Sev Bhujia",
    image: "/assets/bestSell/sev.jpg",
    rating: 4.3,
    reviews: 4,
    price: 21.6,
    oldPrice: 24,
    discount: "10%",
    stock: true,
  },
  {
    id: 6,
    name: "Haldiram's Sev Bhujia",
    image: "/assets/bestSell/sev.jpg",
    rating: 4.3,
    reviews: 4,
    price: 21.6,
    oldPrice: 24,
    discount: "10%",
    stock: true,
  },
  {
    id: 7,
    name: "Salted Instant Popcorn",
    image: "/assets/bestSell/salted.jpg",
    rating: 3.3,
    reviews: 3,
    price: 11.7,
    oldPrice: 18,
    discount: "35%",
    stock: false,
  },
];

export default function BestSellingProducts() {
  return (
    <section className="py-5">
      <div className="container position-relative">

        {/* Section Title */}
        <div className="d-flex align-items-center mb-4">
          <i className="fa fa-clock-o text-success fs-2 me-2"></i>
          <div>
            <h2 className="fw-bold mb-0">Best Selling Products</h2>
            <p className="text-muted small mb-0">Find the bestseller products in your area with discount.</p>
          </div>
        </div>

        {/* Custom Navigation Arrows */}
        <div className="custom-swiper-buttons">
          <button className="btn btn-light me-2" id="swiper-prev">
            <FaArrowLeft />
          </button>
          <button className="btn btn-light" id="swiper-next">
            <FaArrowRight />
          </button>
        </div>

        {/* Swiper Start */}
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
                prevEl: "#swiper-prev",
                nextEl: "#swiper-next",
            }}
            autoplay={{
                delay: 3000,  // 3 seconds
                disableOnInteraction: false,  // keeps autoplay even after manual swipe
            }}
            breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
            }}
            modules={[Navigation, Autoplay]}   
            className="bestSellingSwiper"
            >

          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card product-card h-100 position-relative shadow-sm">
                {/* Badge */}
                <div className="badge bg-danger position-absolute top-0 start-0 m-2">
                  {product.discount}
                </div>

                {/* Image */}
                <img src={product.image} className="card-img-top p-3" alt={product.name} />

                {/* Body */}
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title mb-2">{product.name}</h6>

                  {/* Rating */}
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <div className="text-warning me-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar key={i} className={i < Math.floor(product.rating) ? "text-warning" : "text-muted"} />
                      ))}
                    </div>
                    <div className="small text-muted ms-1">
                      {product.rating} ({product.reviews})
                    </div>
                  </div>

                  {/* Price and Stock */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <span className="text-danger fw-bold">${product.price}</span>
                      {product.price !== product.oldPrice && (
                        <small className="text-muted ms-1 text-decoration-line-through">
                          ${product.oldPrice}
                        </small>
                      )}
                    </div>
                    <div className="text-success small fw-bold">
                      {product.stock ? "IN STOCK" : "OUT OF STOCK"}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="btn btn-success mt-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Swiper End */}
      </div>
    </section>
  );
}
