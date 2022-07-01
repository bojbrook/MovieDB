import { Routes, Route } from 'react-router-dom';
import PopularMovies from './components/PopularMovies';
import MovieInfo from './components/MovieInfo';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular">
          <Route path=":page" element={<PopularMovies />} />
        </Route>
        <Route path="/movies">
          <Route path=":id" element={<MovieInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
