import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { login } from '../../../redux/user_reducer';

function LoginPage() {
  const dispatch = useDispatch(); // redux에 값 저장
  const navigate = useNavigate(); // 페이지 이동

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const userIdChangeHandler = (e) => {
    setUserId(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const authenticate = async () => {
    const response = await axios.get('/api/user/auth');

    const { data, status } = response;
    if (status !== 200) return alert('fail');

    const { isAuth, name, message } = data;
    if (!isAuth) return alert(message);

    dispatch(login(data));
    alert(`${name}님 환영합니다.`);
    navigate('/');
  };

  const actionLogin = async (body) => {
    const response = await axios.post('/api/user/login', body);

    const { data, status } = response;
    if (status !== 200) return alert('fail');

    const { loginSuccess, message } = data;
    if (!loginSuccess) return alert(message);

    authenticate();
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!userId.trim()) {
      alert('input id');
      return;
    }

    if (!password.trim()) {
      alert('input password');
      return;
    }

    const body = {
      userId,
      password,
    };

    actionLogin(body);
  };

  return (
    <>
      <form
        className="
          flex
          flex-col
          rounded-md
          shadow-xl
          bg-sky-200
          p-2
          gap-y-4
          text-2xl
      "
        onSubmit={formSubmitHandler}
      >
        <div>
          <h4>ID</h4>
          <input type="text" onChange={userIdChangeHandler} />
        </div>

        <div>
          <h4>PASSWORD</h4>
          <input type="password" onChange={passwordChangeHandler} />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
