import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Cvlist.css';

const Cvlist = () => {
  const [cvList, setCvList] = useState([]);
  const [filteredCvList, setFilteredCvList] = useState([]);
  const inputRef = useRef();
  const navigate = useNavigate(); 
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  useEffect(() => {
    const storedCVs = JSON.parse(localStorage.getItem('userCVs')) || [];
    setCvList(storedCVs);
    setFilteredCvList(storedCVs);
  }, []);

  useEffect(() => {
    const query = searchParams.get('query') || '';
    const filtered = cvList.filter((cv) =>
      (cv.firstName.toLowerCase().includes(query.toLowerCase())) || (cv.lastName.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredCvList(filtered);
  }, [searchParams, cvList]);

  const handleSearch = () => {
    const searchValue = inputRef.current.value;
    setSearchParams({ query: searchValue });
  };

  const handleDelete = (index) => {
    const updatedCvList = [...cvList];
    updatedCvList.splice(index, 1);
    
    localStorage.setItem('userCVs', JSON.stringify(updatedCvList));

    setCvList(updatedCvList);
    setFilteredCvList(updatedCvList);
  };

  const handleEdit = (index) => {
    const selectedCV = cvList[index];
    console.log(selectedCV);
    navigate('/step1', { state: {...selectedCV, isEditing: true, index: index} });
  };

  return (
    <div className="cv-list-container">
      <h2 className="cv-list-title">Saved CVs</h2>
      <div className="cv-search-container">
        <input
          className="cv-search-input"
          placeholder="Search by name..."
          ref={inputRef}
        />
        <button className="cv-search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {filteredCvList.length === 0 ? (
        <p>No CVs available.</p>
      ) : (
        <ul className="cv-list">
          {filteredCvList.map((cv, index) => (
            <li key={index} className="cv-item">
              <Link to={`/cvs/${index}`} className="cv-link">
                <div className="cv-summary">
                  <p>
                    <strong>Name:</strong> {cv.firstName} {cv.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {cv.email}
                  </p>
                  <p>
                    <strong>Degree:</strong> {cv.Degree}
                  </p>
                </div>
              </Link>
              <button className='edit-delete-button' onClick={() => handleDelete(index)}>Delete</button>
              <button className='edit-delete-button' onClick={() => handleEdit(index)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cvlist;
