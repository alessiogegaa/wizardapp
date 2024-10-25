import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; 
import './ArrowButton.css'; 

const ArrowButton = ({ direction = 'forward', label, onClick, className = '', style = {} }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {direction === 'backward' ? (
        <>
          <FaArrowLeft className="icon" />
          {label}
        </>
      ) : (
        <>
          {label}
          <FaArrowRight className="icon" />
        </>
      )}
    </button>
  );
};

export default ArrowButton;
