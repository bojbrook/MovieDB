import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
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
