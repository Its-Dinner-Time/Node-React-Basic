import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  const checkPassword = useRef();
  const comparePassword = useRef();
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (!userId) return alert('please input userId');
    if (!name) return alert('please input name');
    if (!password) return alert('please input password');
    if (password.length < 5) return alert('please check password length');
    if (!passwordCheck) return alert('please check password');

    const body = {
      userId,
      password,
      name,
    };
    const response = await axios.post('/api/user', body);
    const { success, err } = response.data;

    if (!success) return alert(err.message);
    alert('회원가입되었습니다.');
    navigate('/login');
  };

  const userIdChangeHandler = (e) => {
    setUserId(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 5) return checkPassword.current.classList.remove('hidden');
    checkPassword.current.classList.add('hidden');
  };

  const passwordCheckChangeHandler = (e) => {
    const value = e.target.value;

    if (value !== password) {
      setPasswordCheck(false);
      comparePassword.current.classList.remove('hidden');
      return;
    }

    setPasswordCheck(true);
    comparePassword.current.classList.add('hidden');
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
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
          <h4>아이디</h4>
          <input type="text" onChange={userIdChangeHandler} />
        </div>

        <div>
          <h4>이름</h4>
          <input type="text" onChange={nameChangeHandler} />
        </div>

        <div>
          <h4>비밀번호</h4>
          <input type="password" onChange={passwordChangeHandler} />
          <div ref={checkPassword} className="hidden">
            비밀번호는 5자리 이상이어야 합니다.
          </div>
        </div>

        <div>
          <h4>비밀번호 확인</h4>
          <input type="password" onChange={passwordCheckChangeHandler} />
          <div ref={comparePassword} className="hidden">
            비밀번호가 맞지 않습니다.
          </div>
        </div>

        <div className="flex justify-between px-3">
          <button type="submit">회원가입</button>
          <button type="button">취소</button>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;
