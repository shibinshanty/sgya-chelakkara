import {  Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Activitypage from './pages/Activitypage';
import Gallerypage from './pages/Gallerypage';
import Sportspage from './pages/Sportspage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
      <div className='body'>
      <Routes>
       <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/activity" element={<Activitypage />} />
      <Route path="/gallery" element={<Gallerypage />} />
      <Route path="/sports" element={<Sportspage />} />
      </Routes>
      </div>
  );
}

export default App;
