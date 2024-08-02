import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import CapturePage from './pages/CapturePage';
import MasterPage from './pages/MasterPage';
import CapturedPage from './pages/CapturedPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="/capture" element={<CapturePage />} />
          <Route path="/master" element={<MasterPage />} />
          <Route path="/captured" element={<CapturedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
