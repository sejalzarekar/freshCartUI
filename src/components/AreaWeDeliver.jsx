import React from 'react';
import { BsGeoAlt } from 'react-icons/bs';

const AreasWeDeliver = () => {
  const areas = [
    'Adlaj', 'Ambawadi', 'Ambli', 'Amraiwadi', 'Asarwa', 'Badarkha', 'Bapunagar', 'Barejadi', 'Bhat',
    'Chanakyapuri', 'Chandkheda', 'Chandlodiya', 'Changodar', 'Chharodi', 'Dabhoda', 'Dahegam', 'Dariapur', 'Dholera',
    'Ellis Bridge', 'Gandhi Ashram', 'Gandhinagar', 'Ghatlodiya', 'Ghodasar', 'Ghuma', 'Gift City', 'Girdhar Nagar', 'Gita Mandir',
    'Gota', 'Gurukul', 'Hansol', 'Hathijan', 'Hatkeshwar', 'Janta Nagar', 'Jagatpur', 'Janta Nagar', 'Jashoda Nagar',
    'Jetalpur', 'Jivraj Park', 'Juna Wadaj', 'Kalapi Nagar', 'Kalol', 'Madhupura', 'Manek Chowk', 'Meghani Nagar', 'Motera',
  ];

  return (
    <div style={{ width: '100%', padding: '2rem 1rem' }}>
      <style>{`
        .areas-title {
          font-weight: 700;
          font-size: 1.5rem;
        }
        .area-link {
          text-decoration: none;
          color: #6c757d;
          display: block;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }
        .area-link:hover {
          color: #28a745;
        }
        .view-all-btn {
          background-color: #28a745;
          color: #fff;
          padding: 0.5rem 1.5rem;
          border: none;
          border-radius: 0.375rem;
        }
        .view-all-btn:hover {
          background-color: #218838;
        }
        .deliver-container {
          background-color: #f0f3f2;
          width:100%;
        }
      `}</style>

      <div className="deliver-container">
        <div className="d-flex justify-content-between align-items-center text-center mb-4 flex-wrap">
          <div className="mb-2">
            <h4 className="areas-title">
              <BsGeoAlt className="me-2  text-success" />
              Areas we deliver to
            </h4>
            <p className="ms-5 mb-0 ">Find the best store products in your area with discount.</p>
          </div>
          <a href="/" className="btn view-all-btn mt-2 mt-md-0">View All City</a>
        </div>

        <div className="row justify-content-center">
          {[0, 1, 2, 3, 4].map((colIdx) => (
            <div className="col-6 col-md-3 col-lg-2" key={colIdx}>
              <ul className="list-unstyled">
                {areas.slice(colIdx * 9, (colIdx + 1) * 9).map((area, idx) => (
                  <li key={idx}>
                    <a href="/" className="area-link">→ {area}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasWeDeliver;
