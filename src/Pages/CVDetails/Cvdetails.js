import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Cvdetails.css';

const Cvdetails = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const storedCVs = JSON.parse(localStorage.getItem('userCVs')) || [];
    const selectedCV = storedCVs[parseInt(id)]; 
    setInfo(selectedCV);
  }, [id]);

  if (!info) {
    return <div className="cv-details-container">CV not found</div>;
  }

  return (
    <div className="cv-details-container">
      <h2 className="cv-title">CV Details</h2>
      <div className="cv-section">
        <h3>Personal Information</h3>
        <p><strong>First Name:</strong> {info.firstName}</p>
        <p><strong>Last Name:</strong> {info.lastName}</p>
        <p><strong>Email:</strong> {info.email}</p>
        <p><strong>Phone:</strong> {info.phone}</p>
        <p><strong>Address:</strong> {info.address}</p>
      </div>
      <div className="cv-section">
        <h3>Education</h3>
        <p><strong>Degree:</strong> {info.Degree}</p>
        <p><strong>Field of Study:</strong> {info.FieldOfStudy}</p>
        <p><strong>University:</strong> {info.University}</p>
        <p><strong>Location:</strong> {info.Location}</p>
        <p><strong>Start Date:</strong> {info.StartDate}</p>
        <p><strong>End Date:</strong> {info.EndDate}</p>
      </div>
      <div className="cv-section">
        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> {info.JobTitle}</p>
        <p><strong>Company Name:</strong> {info.Company}</p>
        <p><strong>Location:</strong> {info.Location}</p>
        <p><strong>Start Date:</strong> {info.StartDate}</p>
        <p><strong>End Date:</strong> {info.EndDate}</p>
        <p><strong>Responsibilities:</strong> {info.Responsibilities}</p>
      </div>
      <div className="cv-section">
        <h3>Skills & Languages</h3>
        <p><strong>Skills:</strong> {info.Skills}</p>
        <p><strong>Languages:</strong> {info.Languages}</p>
        <p><strong>Certifications:</strong> {info.Certifications}</p>
      </div>
    </div>
  );
};

export default Cvdetails;
