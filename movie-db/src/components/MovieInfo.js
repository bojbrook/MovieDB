import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MOVIE_INFO_URL, MOVIE_API } from '../utils/constants';

const MovieInfo = (props) => {
  const [movie, setMovie] = useState({});
  let params = useParams();
  const movieId = parseInt(params.id, 10);

  const getMovieDetail = async (url) => {
    const results = await fetch(url);
    const data = await results.json();

    const movieObj = {
      title: data.title,
      description: data.overview,
    };
    setMovie(movieObj);
  };

  useEffect(() => {
    const url = `${MOVIE_INFO_URL}/${movieId}?api_key=${MOVIE_API}&language=en-US`;
    getMovieDetail(url);
  });
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </>
  );
};

export default MovieInfo;
