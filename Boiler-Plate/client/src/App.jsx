import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/views/Navbar/Navbar';
import LoginPage from './components/views/LoginPage/LoginPage';
import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Footer from './components/views/Footer/Footer';
import LoadingPage from './components/views/common/LoadingPage';

export default function App() {
  return (
    <>
      <div
        className="
          flex
          flex-col
          bg-slate-200 
          w-screen 
          h-screen 
          relative
        "
      >
        <Router>
          <Navbar />

          <div className="grow flex justify-center items-center">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LoadingPage type="logout" />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </div>

          <Footer />
        </Router>
      </div>
    </>
  );
}
