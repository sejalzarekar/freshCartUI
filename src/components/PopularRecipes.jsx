import React from 'react';
import './PopularRecipes.css';
import { BsClock, BsJournalText } from 'react-icons/bs';

const recipes = [
  {
    id: 1,
    type: 'Recipes',
    title: 'Harissa Chickpeas with Whipped Feta',
    image: '/assets/recipe1.jpg',
    time: '12 min',
  },
  {
    id: 2,
    type: 'Retailer',
    title: 'Almond Butter Chocolate Chip Zucchini Bars',
    image: '/assets/recipe2.jpg',
    time: '8 min',
  },
  {
    id: 3,
    type: 'Recipes',
    title: 'Spicy Shrimp Tacos Garlic Cilantro Lime Slaw',
    image: '/assets/recipe3.jpg',
    time: '5 min',
  },
  {
    id: 4,
    type: 'Retailer',
    title: 'Red Chile Chicken Tacos with Creamy Corn',
    image: '/assets/recipe4.jpg',
    time: '9 min',
  },
];

const PopularRecipes = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="section-heading d-flex align-items-center">
            <BsJournalText className="me-2 text-success" size={24} />
            Our most popular recipes
          </h3>
          <p className="text-muted mb-0">Check out most popular recipes of all time.</p>
        </div>
        <button className="btn btn-success">View all recipes</button>
      </div>

      <div className="row gy-4">
        {recipes.map((recipe) => (
          <div className="col-md-6 col-lg-3" key={recipe.id}>
            <div className="card recipe-card h-100">
              <img src={recipe.image} className="card-img-top rounded-top" alt={recipe.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <small className="text-success">{recipe.type}</small>
                <h6 className="card-title mt-1">{recipe.title}</h6>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat.
                </p>
                <div className="text-muted d-flex align-items-center mt-auto">
                  <BsClock className="me-1" size={14} />
                  <small>{recipe.time}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;
