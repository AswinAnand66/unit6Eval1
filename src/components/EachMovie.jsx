import { useNavigate } from 'react-router';
import "./Styles/EachMovie.css"


export const EachMovie=({e})=>{
    let navigate = useNavigate();
    const handleClick=(id)=>{
        navigate(`/movies/${id}`)
    }

    return (
         <div className='eachmovie' onClick={()=>handleClick(e.id)}>
             <h1>{e.movie_name}</h1>
             <p>Genre: {e.genre}</p>
             <img src={e.image_url} alt="" />

         </div>
    )
}