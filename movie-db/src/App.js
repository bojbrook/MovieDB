import { Routes, Route } from 'react-router-dom';
import PopularMovies from './components/PopularMovies';
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
      </Routes>
    </div>
  );
}

export default App;
