import React, { useState } from 'react';
import './CandidateHome.css'; 


const CandidateHome = () => {
  const [referrals, setReferrals] = useState([
    // Sample data
    { id: 'r1', name: 'John Doe' },
    { id: 'r2', name: 'Jane Smith' },
  ]);

  const [services, setServices] = useState([
    // Sample data
    { id: 's1', name: 'Resume Review' },
    { id: 's2', name: 'Interview Coaching' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleLogout = () => {
    // Implement logout functionality
    console.log('Logged out');
  };

  return (
    <div className="c-container">
      <input className='input'
        type="text"
        placeholder="Search by referral or service ID"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="card-container">
        <div className="card">
          <h2>Referrals</h2>
          <ul>
            {referrals
              .filter((referral) => referral.id.includes(searchTerm))
              .map((referral) => (
                <li key={referral.id}>{referral.name}</li>
              ))}
          </ul>
        </div>
        <div className="card">
          <h2>Services</h2>
          <ul>
            {services
              .filter((service) => service.id.includes(searchTerm))
              .map((service) => (
                <li key={service.id}>{service.name}</li>
              ))}
          </ul>
        </div>
      </div>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CandidateHome;
