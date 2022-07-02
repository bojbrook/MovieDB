import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { MOVIE_API, POPULAR_MOVIE_URL } from '../utils/constants';

const Home = () => {
  let params = useParams();
  let pageNumber = parseInt(params.page, 10);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    const movieArr = [];
    data['results'].forEach((movie) => {
      const movieItem = {
        id: movie.id,
        title: movie.title,
      };
      movieArr.push(movieItem);
    });
    setMovies(movieArr);
    console.log(data['results']);
  };

  useEffect(() => {
    const url = `${POPULAR_MOVIE_URL}?api_key=${MOVIE_API}&language=en-US&page=${pageNumber}`;
    console.log(url);

    fetchMovies(url);
  });

  return (
    <>
      <h1>MovieDB home page</h1>
      {movies.map((movie) => {
        return <h1 key={movie.id}>{movie.title}</h1>;
      })}
      <Link to={`/popular/${pageNumber + 1}`}>
        <button>Next Page</button>
      </Link>
    </>
  );
};

export default Home;
