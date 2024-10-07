import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from "./components/Login"
import Home from './components/Home';
import Home1 from './components/ada/Home1';
import Home2 from './components/blog/Home2';

const App = () => {
    return (
      
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/ai" element={<Home1 />} />
                    <Route path="/studio" element={<Home2 />} />
                    
                    
                    
                </Routes>
            </Router>
    
    );
};

export default App;
