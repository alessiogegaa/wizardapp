import React, { useEffect, useRef } from 'react';
import Input from '../../Components/Input/Input';
import ArrowButton from '../../Components/ArrowButton/Arrowbutton';
import './Step4.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Step4 = () => {
  const skillsRef = useRef();
  const languagesRef = useRef();
  const certificationsRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(()=>{
     skillsRef.current.value = location.state.Skills || "";
     languagesRef.current.value = location.state.Languages || "";
     certificationsRef.current.value = location.state.Certifications || "";
  },[location.state]);

  const handleNext = () => {
    const skillsData = {
      Skills: skillsRef.current.value,
      Languages: languagesRef.current.value,
      Certifications: certificationsRef.current.value,
    };

    navigate('/summary', { 
      state: { 
        ...location.state, 
        ...skillsData 
      } 
    });
  };

  const handlePrevious = () => {
    navigate('/step3', { state: location.state });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Step 4 - Skills & Languages</h2>
      <form className="step-form">
        <Input type="text" placeholder="Skills (e.g., JavaScript, React, Project Management)" name="skills" ref={skillsRef} />
        <Input type="text" placeholder="Languages (e.g., English, Spanish)" name="languages" ref={languagesRef} />
        <Input type="text" placeholder="Certifications (e.g., PMP, AWS Certified)" name="certifications" ref={certificationsRef} />
        <div className="button-group">
          <ArrowButton direction="backward" label="Back" onClick={handlePrevious} />
          <ArrowButton direction="forward" label="Next" onClick={handleNext} />
        </div>
      </form>
    </div>
  );
};

export default Step4;

