import React from 'react';
import ReactDOM from 'react-dom/client';
// import './css/main.css';
import './css/main.css';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import routes
import { About, Contact, Home } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> }>
        <Route path='/' index element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='*' element={
            <main>
              <h2>404 page not found</h2>
            </main>
        } />
      </Route>
    </Routes>
  </BrowserRouter>
);

