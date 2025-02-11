import Header from './components/Header/Header';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
  return (
    <Router>
      <Header />

      <div className='container'>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
