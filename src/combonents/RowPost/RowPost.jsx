
import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import axios  from '../../Axios'
import { API_KEY, imgUrl } from '../../Constens/Constens'
import './RowPost.css'

function RowPost(props) {
  const [movie, setmovie]= useState([])
  const [urlid,seturlid]=useState('')

  useEffect(()=>{
    axios.get(props.url).then(responce=>{
      console.log(responce)
      setmovie(responce.data.results)
    }).catch(err=>{
      alert('network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handilMovie = (id)=>{
   console.log(id)
   axios.get(`movie/${id}/videos?api_key=${API_KEY}b79b574030569e69bf87dcbb0773dc05&language=en-US`).then(responce=>{
    if(responce.data.results.length!==0){
      seturlid(responce.data.results[0])
    }else{
      console.log('array empty')
    }
   })
  }
  return (
    <div className='row'>
      <h2>{props.tilte}</h2>
      <div className='posters'>
        {movie.map((obj)=>
         <img onClick={()=>handilMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="" />
        )}
      
        
 
      </div>
    {urlid && <Youtube opts={opts} videoId={urlid.key} /> }
    </div>
  )
}

export default RowPost
