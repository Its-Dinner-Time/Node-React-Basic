import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { makeQueryString } from '../../../../util/API-Util';

function LikeButton(props) {
  const navigate = useNavigate();
  const likeButton = useRef();

  const { movieDetail, movieId, user } = props;
  const [count, setCount] = useState(0);

  const getLikeCounts = async () => {
    const query = {
      movieId: movieId,
    };

    const url = makeQueryString('/api/like/count', query);
    const response = await axios.get(url);
    const likeCounts = response.data.count;

    setCount(likeCounts);
  };

  const isLiked = async () => {
    const query = {
      movieId: movieId,
      userFrom: user?.payload._id,
    };

    const url = makeQueryString('/api/like/bool', query);
    const response = await axios.get(url);

    if (response.data.isLiked) {
      const button = likeButton.current;
      const [svg, message] = button.children;
      svg.classList.add('press');
      message.classList.add('press');
    }
  };

  const addLike = async () => {
    const body = {
      movieId: movieId,
      userFrom: user?.payload._id,
      movieTitle: movieDetail.title,
      moviePoster: movieDetail.backdrop_path,
      movieRuntime: movieDetail.runtime,
    };

    const response = await axios.post('/api/like', body);
    if (response.data.success) return setCount(count + 1);
  };

  const unLike = async () => {
    const query = {
      movieId: movieId,
      userFrom: user?.payload._id,
    };

    const url = makeQueryString('/api/like', query);
    const response = await axios.delete(url);
    if (response.data.success) return setCount(count - 1);
  };

  const likeButtonClickHandler = async (e) => {
    if (!user?.payload.isAuth) return navigate('/login');
    const button = e.target.closest('.favorite-button');
    const [svg, message] = button.children;
    svg.classList.toggle('press');
    message.classList.toggle('press');

    if (svg.classList.contains('press')) {
      return await addLike();
    }

    return await unLike();
  };

  useEffect(() => {
    getLikeCounts();
    proccess();

    async function proccess() {
      if (!user?.payload.isAuth) return;
      await isLiked();
    }
  }, []);

  return (
    <div ref={likeButton} className="favorite-button h-[40px]" onClick={likeButtonClickHandler}>
      <FaHeart />
      <span className="message">liked!</span>
      <span className="counter p-1 align-middle">{count}</span>
    </div>
  );
}

export default LikeButton;
