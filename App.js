import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Navbar from './Navbar';
import Forgot from './Forgot';
import Signup from './Signup';


import Sinch from './Sinch';

import './All.css';
import Journal from './components/Journal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/home" element={<Sinch />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Router>
  );
}  

export default App;