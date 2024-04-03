import  { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = useCallback(async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));  
    },[dispatch]);
  
    useEffect( () => {
      getNowPlayingMovies();
    }
    ,[dispatch,getNowPlayingMovies]);
}

export default useNowPlayingMovies;