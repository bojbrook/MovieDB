import { useEffect, useState } from 'react';

const Home = () => {
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
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;
    console.log(url);

    fetchMovies(url);
  }, []);

  return (
    <>
      <h1>MovieDB home page</h1>
      {movies.map((movie) => {
        return <h1 key={movie.id}>{movie.title}</h1>;
      })}
    </>
  );
};

export default Home;
