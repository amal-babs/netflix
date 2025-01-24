import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl}from '../../constants/constant'
import Axios from '../../Axios'
import "./Banner.css"
import axios from 'axios'
function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results[0])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title:""}</h1>
        <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview:""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
