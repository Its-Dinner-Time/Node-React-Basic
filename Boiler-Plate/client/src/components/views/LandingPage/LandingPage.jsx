import React from 'react';
import { useSelector } from 'react-redux';

function LandingPage() {
  const user = useSelector((state) => state.user.info); // store에 저장한 값 가져오기
  console.log(user);
  return (
    <>
      <div>LandingPage</div>
    </>
  );
}

export default LandingPage;
