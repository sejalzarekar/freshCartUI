import React from "react";
import "./CategoryCards.css"; // we'll write small custom styles here

const categories = [
  {
    id: 1,
    title: "Offer",
    image: "/assets/categories/offer.jpg",
    bgColor: "#002f6c", // dark blue
  },
  {
    id: 2,
    title: "Fresh Food & Bakery",
    image: "/assets/categories/bakery.jpg",
    bgColor: "#715100", // brownish
  },
  {
    id: 3,
    title: "Mixed and Assorted fruits",
    image: "/assets/categories/fruits.jpg",
    bgColor: "#750c1b", // maroon
  },
];

const CategoryCards = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {categories.map((category) => (
          <div className="col-12 col-md-4" key={category.id}>
            <div className="card border-0 overflow-hidden rounded-4">
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="card-img-top"
                style={{ height: "130px", objectFit: "cover" }}
              />

              {/* Bottom Bar */}
              <div
                className="d-flex align-items-center justify-content-between p-3"
                style={{ backgroundColor: category.bgColor, color: "white" }}
              >
                <h6 className="mb-0">{category.title}</h6>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
