import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="popular/1">
        <h1>Popular Movies</h1>
      </Link>
    </>
  );
};

export default Home;
