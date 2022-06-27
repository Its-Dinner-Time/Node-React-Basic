import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/views/Navbar/Navbar';
import LoginPage from './components/views/LoginPage/LoginPage';
import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Footer from './components/views/Footer/Footer';
import LoadingPage from './components/views/common/LoadingPage';
import Auth from './hoc/auth';
import Admin from './components/views/Admin/Admin';
import MovieDetail from './components/views/MovieDetail/MovieDetail';
import FavoritePage from './components/views/FavoritePage/FavoritePage';

export default function App() {
  return (
    <>
      <div
        className="
          flex
          flex-col
          bg-slate-200 
          max-w-screen 
          min-h-screen 
          relative
        "
      >
        <Router>
          <Navbar />

          <div className="grow flex justify-center items-center">
            <Routes>
              <Route path="/" element={Auth(LandingPage)} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LoadingPage type="logout" />} />
              <Route path="/register" element={Auth(RegisterPage, true)} />
              <Route path="/admin" element={Auth(Admin, true, true)} />
              <Route path="/movie/:movieId" element={Auth(MovieDetail)} />
              <Route path="/favorite" element={Auth(FavoritePage, true)} />
            </Routes>
          </div>

          <Footer />
        </Router>
      </div>
    </>
  );
}
