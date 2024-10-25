import React, { useRef } from 'react';
import Input from '../../Components/Input/Input';
import ArrowButton from '../../Components/ArrowButton/Arrowbutton';
import './Step1.css'; 
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  
  const navigate = useNavigate();

  const handleNext = () => {
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
    };

    navigate('/step2', { state: formData });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Step 1 - Personal Information</h2>
      <form className="step-form">
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          ref={firstNameRef}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          ref={lastNameRef}
        />
        <Input
          type="email"
          placeholder="Email Address"
          name="email"
          ref={emailRef}
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          ref={phoneRef}
        />
        <Input
          type="text"
          placeholder="Address"
          name="address"
          ref={addressRef}
        />
        <div className="button-group">
          <ArrowButton direction="forward" label="Next" onClick={handleNext} />
        </div>
      </form>
    </div>
  );
};

export default Step1;
