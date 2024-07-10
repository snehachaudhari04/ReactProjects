
import './App.css';
import IndexPage from './Components/IndexPage/IndexPage';

import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import CandidateHome from './Components/CandidateHome/CandidateHome';

function App() {
  return (
   <>
   {/* <Router>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
    <IndexPage/>
    <LoginPage/> */}
    <CandidateHome/>
   
   </>
  );
}

export default App;
