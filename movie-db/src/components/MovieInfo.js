import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MOVIE_API, MOVIE_INFO_URL } from '../utils/constants';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  let params = useParams();
  const movieId = parseInt(params.id, 10);


  const getMovieDetail = useCallback(async (url) =>{
    const results = await fetch(url);
    const data = await results.json();

    return {
      title: data.title,
      description: data.overview,
      user_review: data.vote_average,
    }
  },[])

  useEffect(() => {
      const url = `${MOVIE_INFO_URL}/${movieId}?api_key=${MOVIE_API}&language=en-US`;
      const image_url = `${MOVIE_INFO_URL}/${movieId}/images?api_key=${MOVIE_API}&language=en-US`;
      console.log(image_url);
      getMovieDetail(url).then(r => setMovie(r));

    }, [getMovieDetail, movieId]);
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.user_review}</p>
      <p>{movie.description}</p>
    </>
  );
};

export default MovieInfo;
