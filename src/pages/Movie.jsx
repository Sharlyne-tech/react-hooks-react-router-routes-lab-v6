import { useEffect, useState } from "react";
 import NavBar from "../components/NavBar";
 import { useParams } from "react-router-dom";
 
 function Movie() {
   const [movie, setMovie] = useState({})
 
   const params = useParams();
   const id = params.id
   let genres = movie.genres
   console.log(id)
   useEffect(()=>{
     fetch(`http://localhost:4000/movies/${id}`)
     .then(r => r.json())
     .then((data) => setMovie(data))
     .catch(e=> console.error("when i catch you",e))  
   },[])
   if(!genres){
     return <h1>Loading...</h1>
   }
 
   return (
     <>
       <header>
         {/* What component should go here? */}
         <NavBar/>
       </header>
       <main>
         {/* Movie info here! */}
         <h1>{movie.title}</h1>
         <p>{movie.time}</p>
         {!genres ? 
         <p>Loading...</p> :
         genres.map((genre, index)=>{
             return <span key={index}>{genre}</span>
         })
         }
         {/* 
         {
          genres.map((genre, index)=>{
             return <span key={index}>{genre}</span>
           })
         } */}
       </main>
     </>
   );
 };
 
 export default Movie;