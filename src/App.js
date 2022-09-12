import React from 'react';

//react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import MovieDetail from './components/movieDetails/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

//styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes> 
        </div> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
