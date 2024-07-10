import React, { useState } from 'react';
import './CandidateHome.css'; 
import { useNavigate } from 'react-router-dom';


const CandidateHome = () => {
    const navigate =useNavigate()
  const [referrals, setReferrals] = useState([
    // Sample data
    { id: 'r1', name: 'John Doe' },
    { id: 'r2', name: 'Jane Smith' },
    { id: 'r3', name: 'Jos Buttler' },
    { id: 'r4', name: 'Kane shane' },
    { id: 'r5', name: 'keirson beto' },
  ]);

  const [services, setServices] = useState([
    // Sample data
    { id: 's1', name: 'Resume Review' },
    { id: 's2', name: 'Interview Coaching' },
    { id: 's2', name: 'Refferal Support' },
    { id: 's2', name: 'One to One session' },
    
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleLogout = () => {
    navigate("/")
    console.log('Logged out');
  };

  return (
    <div className="c-container">
        
    <button className="btn2" onClick={handleLogout}>LOG<br></br>OUT</button>
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
                <ul key={referral.id}>{referral.id} :  {referral.name}</ul>
              ))}
          </ul>
        </div>
        <div className="card">
          <h2>Services</h2>
          <ul>
            {services
              .filter((service) => service.id.includes(searchTerm))
              .map((service) => (
                <ul key={service.id}>{service.id} :  {service.name}</ul>
              ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default CandidateHome;
