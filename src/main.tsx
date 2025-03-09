import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App.tsx';
import TablePage from "./pages/tablepage";
import {PokemonPage} from "./pages/pokemonpage/index.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<PokemonPage />} />
        <Route path='/table' element={<TablePage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
