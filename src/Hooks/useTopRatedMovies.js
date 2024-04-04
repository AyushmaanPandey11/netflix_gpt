import  { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = useCallback(async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));  
    },[dispatch]);
  
    useEffect( () => {
        getTopRatedMovies();
    }
    ,[dispatch,getTopRatedMovies]);
}

export default useTopRatedMovies;