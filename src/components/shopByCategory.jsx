import React from "react";
import "./shopByCategory.css";

// Import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Baby Care", icon: "/assets/icons/baby-care.svg" },
  { name: "Fish", icon: "/assets/icons/fish.svg" },
  { name: "Pet Foods", icon: "/assets/icons/petfoods.svg" },
  { name: "Fruits", icon: "/assets/icons/fruit.svg" },
  { name: "Coffee & Tea", icon: "/assets/icons/coffee.svg" },
  { name: "Wine", icon: "/assets/icons/wine.svg" },
  { name: "Bakery", icon: "/assets/icons/bakery.svg" },
  { name: "Dairy", icon: "/assets/icons/dairy.svg" },
  { name: "Vegetables", icon: "/assets/icons/vegetables.svg" },
  { name: "Snacks", icon: "/assets/icons/snacks.svg" },
];

const ShopByCategory = () => {
  return (
    <div className="container my-5">
      <div className="d-flex align-items-center mb-4 animate-heading">
        <i className="bi bi-layers-fill text-success fs-3 me-2"></i>
        <h3 className="fw-bold mb-0">Shop by Categories</h3>
      </div>

      <div className="position-relative">
        {/* Left Arrow */}
        <div id="swiper-prev" className="swiper-button-prev-custom">
          <i className="bi bi-chevron-left"></i>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: "#swiper-prev",
            nextEl: "#swiper-next",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 8 },
          }}
          loop
          modules={[Navigation, Autoplay]}
          className="category-swiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="category-card p-4 text-center rounded">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="img-fluid mb-3"
                  style={{ height: "60px" }}
                />
                <h6 className="fw-semibold">{category.name}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <div id="swiper-next" className="swiper-button-next-custom">
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
