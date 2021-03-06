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
      // 전부 통과
      if (option === null) return;
      if (option === true) proccess();

      async function proccess() {
        const response = await dispatch(Auth());

        const { isAuth, isAdmin } = response.payload;

        if (isAuth === false) {
          if (location.pathname === '/register') return;
          return navigate('/login');
        }

        await dispatch(login(response));

        if (adminRoute === true) {
          if (isAdmin === false) return navigate('/');
          return;
        }
      }
    }, []);
    return <SpecifiedComponent />;
  }

  return <AuthenticationCheck />;
}
