import React from 'react';
import ArrowButton from '../../Components/ArrowButton/Arrowbutton';
import './Summary.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Summary = () => {
  let location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const handlePrevious = () => {
    navigate('/step4', { state: location.state });
  };

  const handleFinish = () => {
    const existingCVs = JSON.parse(localStorage.getItem('userCVs')) || [];
    
    if (location.state.isEditing) {
      const index = location.state.index; 

      if (index >= 0 && index < existingCVs.length) {
        existingCVs[index] = { ...existingCVs[index], ...location.state }; 
        localStorage.setItem('userCVs', JSON.stringify(existingCVs));
      } else {
        console.error('Invalid index');
      }
    } else {
      const updatedCVs = [...existingCVs, location.state];
      localStorage.setItem('userCVs', JSON.stringify(updatedCVs));
    }
    
    navigate('/cvs'); 
  };

  const { 
    firstName, 
    lastName, 
    email, 
    phone, 
    address, 
    Degree, 
    FieldOfStudy, 
    University, 
    Location: eduLocation, 
    StartDate, 
    EndDate, 
    JobTitle, 
    Company, 
    WorkLocation, 
    Responsibilities, 
    Skills, 
    Languages, 
    Certifications 
  } = location.state;

  return (
    <div className="step-container">
      <h2 className="step-title">Summary - Review Your Information</h2>
      <div className="summary-placeholder">
        <p><strong>Personal Information:</strong> {firstName} {lastName}, Email: {email}, Phone: {phone}, Address: {address}</p>
        <p><strong>Education:</strong> Degree: {Degree}, Field of Study: {FieldOfStudy}, University: {University}, Location: {eduLocation}, Start Date: {StartDate}, End Date: {EndDate}</p>
        <p><strong>Work Experience:</strong> Job Title: {JobTitle}, Company: {Company}, Location: {WorkLocation}, Start Date: {StartDate}, End Date: {EndDate}, Responsibilities: {Responsibilities}</p>
        <p><strong>Skills & Languages:</strong> Skills: {Skills}, Languages: {Languages}, Certifications: {Certifications}</p>
      </div>
      <div className="button-group">
        <ArrowButton direction="backward" label="Back" onClick={handlePrevious} />
        <ArrowButton direction="forward" label="Finish" onClick={handleFinish} />
      </div>
    </div>
  );
};

export default Summary;
