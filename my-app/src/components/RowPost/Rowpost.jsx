import React, { useEffect, useState } from 'react'
import {imageUrl}from '../../constants/constant'
import "./RowPost.css"
import axios from 'axios'

function Rowpost(props) {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
    //alert("error")
    },[]);
    

  },[])
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((Obj)=>
          <img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+Obj.backdrop_path}`} alt="" />
        )}
        
        
      </div>
    </div>
  )
}

export default Rowpost
