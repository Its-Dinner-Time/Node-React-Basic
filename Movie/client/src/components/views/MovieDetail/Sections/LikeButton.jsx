import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LikeButton(props) {
  const user = useSelector((state) => state.user.info);
  const navigate = useNavigate();

  const { movieDetail, movieId } = props;
  const [count, setCount] = useState(0);

  const getLikeCounts = async () => {
    const response = await axios.get('/api/like/count');
    const likeCounts = response.data;
    setCount(likeCounts);
  };

  const likeButtonClickHandler = async (e) => {
    const button = e.target.closest('div');
    const [svg, message, hidden] = button.children;
    svg.classList.toggle('press');
    message.classList.toggle('press');

    if (svg.classList.contains('press')) {
      if (!user) navigate('/login');
      return hidden.classList.remove('hidden');
    }

    hidden.classList.add('hidden');
  };

  useEffect(() => {
    // getLikeCounts();
  }, []);
  return (
    <div className="favorite-button h-[40px]" onClick={likeButtonClickHandler}>
      <FaHeart />
      <span className="message">liked!</span>
      <span className="hidden p-1 align-middle">{count}</span>
    </div>
  );
}

export default LikeButton;
