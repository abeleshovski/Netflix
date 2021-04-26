import React,{useState,useEffect} from 'react'
import instance from './axios'
import "../style/Row.css"

const base_url="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([])
    

    useEffect(()=>{
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    },[fetchUrl])

    console.log(movies)

    

    const handleClick=()=>{
        const newWindow = window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {/*row posters*/}
                {movies.map(movie =>(
                    <img
                        key={movie.id}
                        onClick={()=>handleClick()}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.title}
                        ></img>
                ))}
            </div>
            
        </div>
    )
}

export default Row
