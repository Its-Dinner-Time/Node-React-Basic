import React, { useEffect, useState } from 'react';
import { MOVIE_API_URL, API_KEY, IMG_API_URL } from '../../Config';
import axios from 'axios';
import MainImg from './Sections/MainImg';
import GridCards from '../common/GridCards';

function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);

  const fetchMovies = async () => {
    const endPoint = `${MOVIE_API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(endPoint);

    setMovies(response.data.results);
    setMainMovie(response.data.results[0]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="xl:container md:container w-full h-full p-6">
        {mainMovie && (
          <MainImg
            image={`${IMG_API_URL}original${mainMovie.backdrop_path}`}
            title={mainMovie.original_title}
            text={mainMovie.overview}
          />
        )}

        <h1 className="text-3xl border-b border-slate-400 pb-6 mt-6">Movies</h1>

        <GridCards list={movies} />

        <div className="flex justify-center mt-4">
          <button className="rounded-full text-white bg-cyan-400 px-6 py-2 hover:scale-125 ease-in-out duration-300 active:bg-cyan-500">
            load more
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
