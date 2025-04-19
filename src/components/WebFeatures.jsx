import React from 'react';
import {
  BsClock,
  BsGift,
  BsBox,
  BsPhone,
  BsTruck,
  BsArrowRepeat,
} from 'react-icons/bs';

const WebFeatures = () => {
  const features = [
    {
      icon: <BsClock className="feature-icon" />,
      title: 'Cheapest basket 25 years running',
      text: 'Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.',
    },
    {
      icon: <BsGift className="feature-icon" />,
      title: 'Best Prices & Offers',
      text: 'Cheaper prices than your local supermarket, great cashback offers to top it off.',
    },
    {
      icon: <BsBox className="feature-icon" />,
      title: 'Wide Assortment',
      text: 'Choose from 5000+ products across food, personal care, household & other categories',
    },
    {
      icon: <BsPhone className="feature-icon" />,
      title: 'Shop with our app',
      text: (
        <>
          Shop on the go with our app for <span className="text-success">tablet and mobile</span>. Get live order tracking. Get latest feature updates.
        </>
      ),
    },
    {
      icon: <BsTruck className="feature-icon" />,
      title: 'Want your shopping today?',
      text: (
        <>
          Choose from our award winning <span className="text-success">Express delivery</span> or collection options.
        </>
      ),
    },
    {
      icon: <BsArrowRepeat className="feature-icon" />,
      title: 'Easy Returns/Refund',
      text: (
        <>
          Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked <span className="text-success">policy</span>.
        </>
      ),
    },
  ];

  return (
    <div className="container my-5">
      <style>{`
        .feature-icon {
          font-size: 2rem;
          color: #28a745;
        }
      `}</style>

      <div className="row gy-4 text-center mt-3">
        {features.map((feature, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div>{feature.icon}</div>
            <h5 className="fw-bold mt-3">{feature.title}</h5>
            <p className="text-muted">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebFeatures;
