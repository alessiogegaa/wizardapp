import React from 'react';
import './Input.css'; 

const Input = React.forwardRef(({
  type = 'text',        
  placeholder = '',           
  name,                 
  className = '',       
  style = {},           
  ...rest               
}, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`custom-input ${className}`} 
      style={{ ...style }}
      ref={ref} 
      {...rest}
    />
  );
});


export default Input;
