import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { makeQueryString } from '../../../util/API-Util';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FavoritePage() {
  const [movieList, setMovieList] = useState([]);
  const user = useSelector((state) => state.user.info);
  const navigate = useNavigate();

  const trClickHandler = (e) => {
    if (e.target.matches('button')) return;
    const target = e.target.closest('tr');
    navigate(`/movie/${target.dataset.id}`);
  };

  const unlikeClickHandler = async (movieId, userFrom) => {
    const query = {
      movieId,
      userFrom,
    };

    const url = makeQueryString('/api/like', query);
    const response = await axios.delete(url);
    if (response.data.success) {
      const arr = movieList.filter((item) => item.movieId !== movieId);
      setMovieList(arr);
    }
  };

  useEffect(() => {
    proccess();
    async function proccess() {
      const query = {
        userFrom: user?.payload._id,
      };
      const url = makeQueryString('/api/like/list', query);

      const response = await axios.get(url);
      if (movieList.length === 0) return setMovieList(response.data.data);
    }
  });

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <tbody>
          {movieList &&
            movieList.map((item, idx) => {
              return (
                <tr key={item.movieId} data-id={item.movieId} onClick={trClickHandler}>
                  <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">Movie Title</td>
                  <td className="border border-slate-300 px-6 py-3">{item.movieTitle}</td>
                  <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">Run Time</td>
                  <td className="border border-slate-300 px-6 py-3">{item.movieRuntime}</td>
                  <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">unlike</td>
                  <td className="border border-slate-300 px-6 py-3">
                    <button
                      className="rounded-full text-white bg-cyan-400 px-6 py-2 hover:scale-125 ease-in-out duration-300 active:bg-cyan-500"
                      type="button"
                      onClick={() => unlikeClickHandler(item.movieId, user.payload._id)}
                    >
                      unlike
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default FavoritePage;
