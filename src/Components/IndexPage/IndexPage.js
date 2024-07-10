import React from 'react';
import './IndexPage.css'
import { useNavigate } from 'react-router-dom';
import SearchComponenet from '../SearchComponenet';

function IndexPage() {
  const navigate = useNavigate()

  function handleClick(){
    navigate("/Login")
  }
  

  return (
   <>
   <SearchComponenet/>
   <div className='index-container'>
   <div className='index-right all-container'>
      <div>
     <h1 className='index-text'>DISCOVER YOUR  DREAM</h1> 
     <h1 className='index-text'> JOB WITH WORKAI</h1> 
     <h1 className='index-text-orange'>WHERE CONNCETION LEADES TO CARRER</h1>
     <button className='btn' onClick={handleClick}>Login</button>
    
     </div>
     </div>
     <div className='index-left all-container'>

        <img className='index-img' src="./r3.png" alt='img' ></img>

     </div>
       
   </div>
   </>
  );
}

export default IndexPage;
