import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogInPage from './pages/login/LoginPage';
import SignUpPage from './pages/signUp/SignUp';
import LandingPage from './pages/landing/LandingPage';

import WishList from './pages/Wishlist/WishList';
import { MovieDetails } from './pages/moviesDetails/MovieDetails';
import { MovieList } from './pages/movies/MoviesList';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IMDBContext } from './Context';
import { fetchMovies } from './redux/Movies/moviesAction';
import { fetchWishList } from './redux/wishList/wishListAction';
import Footer from './Components/Footer/Footer';
import ForgetPage from './pages/forgetPage/ForgetPage';
import Actor from './pages/Actor/Actor';
import Producer from './pages/Producer/Producer';
import { fetchActors } from './redux/Actors/actorAction';
import { fetchProducers } from './redux/Producers/producerAction';
import SelMovie from './pages/SelMovie/SelMovie';


function App() {
  const dispatch=useDispatch()
  const {baseUrl}=useContext(IMDBContext)
  useEffect(()=>{
    dispatch(fetchMovies(baseUrl))
    dispatch(fetchActors(baseUrl))
    dispatch(fetchProducers(baseUrl))
    if(localStorage.getItem("email")){
      dispatch(fetchWishList(baseUrl,localStorage.getItem("email")))
    }
  },[baseUrl])
  return (
    <div className="App">
     <Routes>
     <Route exact path="/" element={<LandingPage/>}/>
     <Route path="/login" element={<LogInPage/>}/>
     <Route path="/signUp" element={<SignUpPage/>}/>
     <Route path="/forget" element={<ForgetPage/>}/>
     <Route path="/movies" element={<MovieList/>} />
     <Route path="/movies/:id" element={<MovieDetails />} />
     <Route path="/wishlist" element={<WishList/>}/>
     <Route path="/actor" element={<Actor/>}/>
     <Route path="/producer" element={<Producer/>}/>
     <Route path="/selMovie/:id" element={<SelMovie/>}/>
     <Route path='*' element={<LogInPage/>} />        
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
