import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Feed from './pages/Feed'
import CreateRecipe from './pages/CreateRecipe'
import Profile from './pages/Profile'
import SearchResults from './pages/SearchResults'
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Feed /> } />
        <Route path='/create-recipe' element={<CreateRecipe /> } />
        <Route path='/profile/:username' element={<Profile /> } />
        <Route path='/search/:hashtag' element={<SearchResults  /> } />
      </Routes>
    </Router>
  );
}

export default App;
