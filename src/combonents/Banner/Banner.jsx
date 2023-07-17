import React, { useEffect, useState } from 'react'

import{API_KEY,imgUrl}from '../../Constens/Constens'
import axios from '../../Axios'
import './Banner.css'
function Banner() {
  const [movie, setmovie] = useState()
  useEffect(()=>{
   
      axios.get(`trending/all/week?api_key=${API_KEY}&language=rn-US`).then((responce)=>{
        console.log(responce.data.results[0])
        
        setmovie(responce.data.results.sort(function(a,b){return 0.5-Math.random()})[0])
      })
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ""})`}}
     className='banner'>
       <div className='condent'>
        <h2 className='title'>{movie ? movie.title : ''}</h2>
       
        <div className='banner_buttons'>
           <button className='button'>play</button>
           
           <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview :''}</h1>
       
       </div>
       <div className="fade-bottom"></div>
   
    </div>
  ) 
}

export default Banner
