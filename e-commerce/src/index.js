import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import App from '../src/pages/App/App';
import { Home } from './pages/Home';
import { Produto } from './pages/produto';

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
            
      <Route path="/" element={<Home />}/>
      <Route path="/app" element={<App />}/>
      <Route path="/produto" element={<Produto />}></Route>

    </Routes>
  </BrowserRouter>

);
reportWebVitals();
