import React, { useRef } from 'react';
import Input from '../../Components/Input/Input';
import ArrowButton from '../../Components/ArrowButton/Arrowbutton';
import './Step2.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Step2 = () => {
  const degreeRef = useRef();
  const studyRef = useRef();
  const universityRef = useRef();
  const locationRef = useRef();
  const startdateRef = useRef();
  const enddateRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const handleNext = () => {
    const formData = {
      Degree: degreeRef.current.value,
      FieldOfStudy: studyRef.current.value,
      University: universityRef.current.value,
      Location: locationRef.current.value,
      StartDate: startdateRef.current.value,
      EndDate: enddateRef.current.value,
    };
  
    navigate('/step3', { 
      state: { 
        ...location.state, 
        ...formData 
      } 
    });
  };

  const handlePrevious = () => {
    navigate('/step1', { state: "" });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Step 2 - Education</h2>
      <form className="step-form">
        <Input type="text" placeholder="Degree" name="degree" ref={degreeRef} />
        <Input type="text" placeholder="Field of Study" name="fieldOfStudy" ref={studyRef} />
        <Input type="text" placeholder="University / School" name="institution" ref={universityRef} />
        <Input type="text" placeholder="Location" name="location" ref={locationRef} />
        <Input type="date" placeholder="Start Date" name="startDate" ref={startdateRef} />
        <Input type="date" placeholder="End Date" name="endDate" ref={enddateRef} />
        <div className="button-group">
          <ArrowButton direction="backward" label="Back" onClick={handlePrevious} />
          <ArrowButton direction="forward" label="Next" onClick={handleNext} />
        </div>
      </form>
    </div>
  );
};

export default Step2;

