
import './App.css';
import IndexPage from './Components/IndexPage/IndexPage';

import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import CandidateHome from './Components/CandidateHome/CandidateHome';

function App() {
  return (
   <>
   <BrowserRouter>
   
      <Routes>
        <Route exact path="/" element={<IndexPage/>} />
      </Routes>
      <Routes>
        <Route exact path="/Login" element={<LoginPage/>} />
      </Routes>
      <Routes>
        <Route exact path="/CandidateHomePage" element={<CandidateHome/>} />
      </Routes>
    
      </BrowserRouter>
   
   
   </>
  );
}

export default App;
