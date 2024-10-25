import React, { useEffect, useRef } from 'react';
import Input from '../../Components/Input/Input';
import ArrowButton from '../../Components/ArrowButton/Arrowbutton';
import './Step3.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Step3 = () => {
  const jobTitleRef = useRef();
  const companyRef = useRef();
  const locationRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const responsibilitiesRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  useEffect(()=>{
    if(location.state) {
      jobTitleRef.current.value = location.state.JobTitle || "";
      companyRef.current.value = location.state.Company || "";
      locationRef.current.value = location.state.Location || "";
      startDateRef.current.value = location.state.StartDate || "";
      endDateRef.current.value = location.state.EndDate || "";
      responsibilitiesRef.current.value = location.state.Responsibilities || "";
    }
  },[location.state])

  const handleNext = () => {
    const workExperienceData = {
      JobTitle: jobTitleRef.current.value,
      Company: companyRef.current.value,
      Location: locationRef.current.value,
      StartDate: startDateRef.current.value,
      EndDate: endDateRef.current.value,
      Responsibilities: responsibilitiesRef.current.value
    };

    navigate('/step4', { 
      state: {
        ...location.state ,
        ...workExperienceData 
      } 
    });
  };

  const handlePrevious = () => {
    
    navigate('/step2', { state: location.state });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Step 3 - Work Experience</h2>
      <form className="step-form">
        <Input type="text" placeholder="Job Title" name="jobTitle" ref={jobTitleRef} />
        <Input type="text" placeholder="Company Name" name="company" ref={companyRef} />
        <Input type="text" placeholder="Location" name="location" ref={locationRef} />
        <Input type="date" placeholder="Start Date" name="startDate" ref={startDateRef} />
        <Input type="date" placeholder="End Date" name="endDate" ref={endDateRef} />
        <Input type="text" placeholder="Job Responsibilities" name="responsibilities" ref={responsibilitiesRef} />
        <div className="button-group">
          <ArrowButton direction="backward" label="Back" onClick={handlePrevious} />
          <ArrowButton direction="forward" label="Next" onClick={handleNext} />
        </div>
      </form>
    </div>
  );
};

export default Step3;

