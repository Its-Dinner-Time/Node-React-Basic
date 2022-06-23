import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function LikeButton() {
  const [count, setCount] = useState(1);

  const likeButtonClickHandler = (e) => {
    const button = e.target.closest('div');
    const [svg, message, hidden] = button.children;
    svg.classList.toggle('press');
    message.classList.toggle('press');

    if (svg.classList.contains('press')) {
      hidden.classList.remove('hidden');
      return;
    }

    hidden.classList.add('hidden');
  };

  return (
    <div className="favorite-button h-[40px]" onClick={likeButtonClickHandler}>
      <FaHeart />
      <span className="message">liked!</span>
      <span className="hidden p-1 align-middle">{count}</span>
    </div>
  );
}

export default LikeButton;
