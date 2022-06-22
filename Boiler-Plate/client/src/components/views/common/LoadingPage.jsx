import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../redux/user_reducer';

function LoadingPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutProccess = () => {
    dispatch(logout());
    navigate('/login');
  };

  useEffect(() => {
    switch (props.type) {
      case 'logout':
        logoutProccess();
        break;

      default:
        break;
    }
  }, []);

  return <div>LoadingPage</div>;
}

export default LoadingPage;
