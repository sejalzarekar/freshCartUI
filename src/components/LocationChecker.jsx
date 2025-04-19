import React from "react";
import "./LocationChecker.css";

const LocationChecker = () => {
  return (
    <div
    className="location-bg d-flex flex-column align-items-start justify-content-center"
    style={{ backgroundImage: "url('/assets/bg-img.jpg')" }}
  >
     <div className="small-text ms-5 mt-2">
      <p className="small text-white fw-bold">
        Hello, Sign in for the best experience. New to Freshcart?{" "}
        <a href="#" className="text-primary fw-bold text-decoration-underline">
          Register
        </a> 
      </p>
    </div>
    <div className="card-main ms-5 mt-2">
      <div className="card p-3 location-card">
        <div className="">
          <i className="bi bi-geo-alt-fill text-danger fs-1"></i>
        </div>
        <h4 className="fw-bold ">Check what's in your local store</h4>
        <p className="text-muted  mb-4">See delivery and collection options</p>
  
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Postcode"
          />
          <button className="btn btn-success" type="button">
            Check
          </button>
        </div>
      </div>
    </div>
  
  </div>
  
  );
};

export default LocationChecker;
