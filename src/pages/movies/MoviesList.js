
import { useState, useEffect, useContext } from "react";
import IconButton from '@mui/material/IconButton';
import Carousel from 'react-bootstrap/Carousel';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import { MovieCard } from "../../Components/Movie/MovieCard";
import "./MoviesList.css"
import NavBar from "../../Components/NavBar/NavBar";

import { IMDBContext } from "../../Context";
import { useDispatch, useSelector } from "react-redux";
import { addWishList} from "../../redux/wishList/wishListAction";
import { fetchMovies } from "../../redux/Movies/moviesAction";

export function MovieList() {

    
    const [wish, setWish] = useState(false)
    const{pics,baseUrl}=useContext(IMDBContext)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchMovies(baseUrl)) 
      },[])
    const movieList=useSelector((movies)=>movies.movies.movies)
    const wishList=useSelector((wish)=>wish.wishlist.movies)

  

   const handleWish=(id)=>{
    let wish=movieList.filter((movie,idx)=>(movie._id===id))

    let updatedWishList=wish
    
    dispatch(addWishList(baseUrl,updatedWishList))
   }
    
    return (
        <div className="movieListPage">
            <NavBar></NavBar>
            <div className='carousel-land'>
           <Carousel >
           { pics.map((img,idx)=>(
           <Carousel.Item key={idx} >
           <img
           className="d-block"
            src={img}
            alt="First slide"
          style={{width:"100vw",height:"40vh"}}></img>
         </Carousel.Item>
      )) }
   
    </Carousel>
    </div>
    <div className='heading'><h1>Movies</h1></div>
            <div className='movie-list'>
               
                {movieList && movieList?movieList.map((movie) => (
                    <div key={movie._id}>
                        <MovieCard
                            movie={movie}
                            id={movie._id}
                            wishList={
                                <IconButton 
                                sx={{marginLeft: "auto"}}
                                aria-label="wishlist"
                                 color={wish?"secondary":"primary"}
                                 onClick={()=>handleWish(movie._id)}>
                                   <PlaylistAddCheckCircleIcon/>
                                </IconButton>
                            } />
                    </div>
                )):<h1>No Movies</h1>}
            </div>
        </div>
    );
}