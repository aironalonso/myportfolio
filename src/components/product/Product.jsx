import React from 'react';
import "./product.css";

const Product = ({img, link}) => {
  return (
    <div className='prod'>
        <div className="prod-browser">
          <div className="prod-circle"></div>
          <div className="prod-circle"></div>
          <div className="prod-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="project image" className="prod-img" />
        </a>
    </div>
  );
};

export default Product;