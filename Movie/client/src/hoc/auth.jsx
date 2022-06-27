import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Auth, login } from '../redux/user_reducer';
import { useNavigate, useLocation } from 'react-router-dom';

export default function (SpecifiedComponent, option = null, adminRoute = null) {
  function AuthenticationCheck() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      proccess();
    }, []);

    async function proccess() {
      const response = await dispatch(Auth());

      const { isAuth, isAdmin } = response.payload;

      if (isAuth === true) await dispatch(login(response));

      if (option === null) return;

      if (isAuth === false) {
        if (location.pathname === '/register') return;
        return navigate('/login');
      }

      if (adminRoute === true) {
        if (isAdmin === false) return navigate('/');
        return;
      }
    }

    return <SpecifiedComponent />;
  }

  return <AuthenticationCheck />;
}
