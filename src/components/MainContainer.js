import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return ;
    const MainMovie = movies[0];
    const { original_title, overview, id } = MainMovie;

  return (
    <div>
        <VideoTitle title= {original_title} overview= {overview} />
        <VideoBackground movie_id={id} />
    </div>
  )
}

export default MainContainer