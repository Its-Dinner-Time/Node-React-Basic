import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import { API_KEY, IMG_API_URL, MOVIE_API_URL } from '../../Config';
import MainImg from '../common/MainImg';
import GridCards from '../common/GridCards';
import MovieInfo from './Sections/MovieInfo';
import LikeButton from './Sections/LikeButton';

function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [showCredits, setShowCredits] = useState(false);

  const fetchMovie = async (credits = false) => {
    const endpoint = `${MOVIE_API_URL}movie/${movieId}${credits === true ? '/credits' : ''}?api_key=${API_KEY}`;
    const response = await axios(endpoint);
    return response;
  };
  const fetchMovieDetail = async () => {
    const response = await fetchMovie();
    setMovieDetail(response.data);
  };
  const fetchMovieCredit = async () => {
    const response = await fetchMovie(true);
    const arr = response.data.cast.map((item) => {
      return {
        ...item,
        path: item.profile_path,
        alt: item.original_name,
      };
    });
    setMovieCredits(arr);
  };

  const castClickHandler = () => {
    const state = !showCredits;
    setShowCredits(state);
  };

  useEffect(() => {
    fetchMovieCredit();
    fetchMovieDetail();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center">
        {movieDetail && (
          <MainImg
            image={`${IMG_API_URL}original${movieDetail.backdrop_path}`}
            title={movieDetail.original_title}
            text={movieDetail.overview}
          />
        )}
        <div className="xl:container md:container w-full h-full p-6">
          <h1 className="text-3xl border-b border-slate-400 pb-6 my-6">Movie Info</h1>

          {/* info */}
          <section className="p-6 pt-0">
            <div className="w-full flex justify-end mb-6">
              <LikeButton />
            </div>

            <MovieInfo info={movieDetail} />
          </section>

          <div className="flex justify-center mt-4">
            <button
              className="rounded-full text-white bg-cyan-400 px-6 py-2 hover:scale-125 ease-in-out duration-300 active:bg-cyan-500"
              onClick={castClickHandler}
            >
              Casts
            </button>
          </div>

          {/* credits */}
          <div className={`${showCredits === false ? 'hidden' : ''}`}>
            <GridCards list={movieCredits} isLinked={false} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
