import React from 'react';
import './storeLocation.css';
import { FaStore } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const stores = [
  {
    name: 'E-Grocery Super Market',
    tags: ['Organic', 'Groceries', 'Butcher Shop'],
    distance: '7.5 mi away',
    services: ['Delivery', 'Pickup available'],
    icon: '🍉',
    showPrices: true,
  },
  {
    name: 'DealShare Mart',
    tags: ['Alcohol', 'Groceries'],
    distance: '7.2 mi away',
    services: ['Delivery', 'Pickup available'],
    icon: '🛒',
    showPrices: false,
  },
  {
    name: 'DMart',
    tags: ['Groceries', 'Bakery', 'Deli'],
    distance: '9.3 mi away',
    services: ['Delivery by 10:30pm', 'Pickup available'],
    deliveryTimeColor: 'green',
    icon: '🥫',
    showPrices: false,
  },
];

const StoreLocation = () => {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="d-flex align-items-center">
          <FaStore className="me-2" /> Best stores in Locations
        </h4>
        <span className="text-success d-flex align-items-center all-stores">
          All stores <FiArrowRight className="ms-1" />
        </span>
      </div>

      <p className="text-muted mb-4">Find the best store products in your area with discount.</p>

      <div className="d-flex gap-3 flex-wrap">
        {stores.map((store, index) => (
          <div key={index} className="card p-3 flex-fill store-card">
            <div className="store-icon mb-3">{store.icon}</div>
            <h5 className="store-title">{store.name}</h5>
            <div className="mb-2 text-muted">
              {store.tags.join(' · ')}
            </div>
            <div className="text-muted mb-1">{store.services[0]}</div>
            <div className="text-muted mb-3">{store.services[1]}</div>
            <div className="d-flex gap-2 align-items-center">
              <span className="badge bg-light text-dark">{store.distance}</span>
              {store.showPrices && <button className="btn btn-outline-secondary btn-sm">In-store prices</button>}
              {store.deliveryTimeColor && <span className="text-success">{store.services[0]}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreLocation;
