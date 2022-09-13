import React, { useEffect } from "react";
import { APIKey } from "../../common/APIs/movieApiKey";
import movieApi from "../../common/APIs/movieApi";
import {addMovies} from '../../features/movies/movieSlice'
//react redux
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi
                .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log("Err: ", err)
                });
            dispatch(addMovies(response.data))
        };
        fetchMovies();
    }, [dispatch]);

    return (  
        <div>
            <MovieListing />
        </div>
    );
}

export default Home;