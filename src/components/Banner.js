import React,{useState,useEffect} from 'react'
import instance from './axios'
import request from './requests'
import "../style/Banner.css"

function Banner() {
    const [movie,setMovie] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const requests= await instance.get(request.fetchTopRated)
            setMovie(
                requests.data.results[
                    Math.floor(Math.random() * requests.data.results.length -1)
                ]
            );
            return requests;
        }
        fetchData()
    },[])
    
    console.log(movie)

    function truncate(str,n) {
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }

    const handleClick=()=>{
        const newWindow = window.open(`https://www.youtube.com/watch?v=q9RAZxNdCk8`, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
        >
             <div className="banner_contents">
                 
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_btns">
                    <button className="banner_btn" onClick={()=>handleClick()}>Play</button>
                    <button className="banner_btn" onClick={()=>handleClick()}>My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>

            </div>
            <div className="banner-fade-bottom"></div>
        </header>
    )
}

export default Banner
