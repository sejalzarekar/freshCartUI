import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PopularProducts.css";

const products = [
  {
    id: 1,
    name: "Crushed Tomatoes",
    category: "Fruits & Vegetables",
    image: "/assets/products/tomato.jpg",
    rating: 4.3,
    reviews: 4,
    price: 13.5,
    oldPrice: 18,
    discount: 25,
  },
  {
    id: 2,
    name: "Golden Pineapple",
    category: "Fruits & Vegetables",
    image: "/assets/products/pineapple.jpg",
    rating: 4.3,
    reviews: 4,
    price: 14.4,
    oldPrice: 18,
    discount: 20,
  },
  {
    id: 3,
    name: "Fresh Apple",
    category: "Fruits & Vegetables",
    image: "/assets/products/apple.jpg",
    rating: 4.3,
    reviews: 4,
    price: 19.2,
    oldPrice: 24,
    discount: 20,
  },
  {
    id: 4,
    name: "Golden Pineapple",
    category: "Fruits & Vegetables",
    image: "/assets/products/pineapple.jpg",
    rating: 4.3,
    reviews: 4,
    price: 24,
    oldPrice: 24,
    discount: 0,
  },
  {
    id: 5,
    name: "Fresh Kiwi",
    category: "Fruits & Vegetables",
    image: "/assets/products/kiwi.jpg",
    rating: 4.3,
    reviews: 4,
    price: 29.75,
    oldPrice: 35,
    discount: 15,
  },
  {
    id: 6,
    name: "Fresh Kiwi",
    category: "Fruits & Vegetables",
    image: "/assets/products/kiwi.jpg",
    rating: 4.3,
    reviews: 4,
    price: 29.75,
    oldPrice: 35,
    discount: 15,
  },
  {
    id: 7,
    name: "Crushed Tomatoes",
    category: "Fruits & Vegetables",
    image: "/assets/products/tomato.jpg",
    rating: 4.3,
    reviews: 4,
    price: 13.5,
    oldPrice: 18,
    discount: 25,
  },
];

const PopularProducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className="container my-5">
      <div className="d-flex align-items-center mb-4">
        <i className="bi bi-star-fill text-success fs-3 me-2"></i>
        <h3 className="fw-bold mb-0">FreshCart Popular Products</h3>
      </div>

      <div className="position-relative">
        {/* Left Arrow */}
        <div ref={prevRef} className="swiper-button-prev-custom">
          <i className="bi bi-chevron-left"></i>
        </div>

        {/* Swiper */}
        {navigationReady && (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
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
                <div className="product-card p-3 rounded position-relative">
                  {product.discount > 0 && (
                    <span className="badge bg-success position-absolute top-0 start-0 m-2">
                      {product.discount}% {product.discount >= 20 ? "Sale" : ""}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid mb-3 mx-auto d-block"
                    style={{ height: "140px", objectFit: "contain" }}
                  />
                  <small className="text-muted">{product.category}</small>
                  <h6 className="fw-semibold mt-1">{product.name}</h6>
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-warning me-2">
                      {"★".repeat(Math.round(product.rating))}
                      {"☆".repeat(5 - Math.round(product.rating))}
                    </div>
                    <small className="text-muted">({product.reviews})</small>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <h6 className="mb-0">${product.price}</h6>
                    {product.oldPrice && product.oldPrice > product.price && (
                      <small className="text-muted ms-2 text-decoration-line-through">
                        ${product.oldPrice}
                      </small>
                    )}
                  </div>
                  <button className="btn btn-success w-100 btn-sm">
                    + Add
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Right Arrow */}
        <div ref={nextRef} className="swiper-button-next-custom">
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
