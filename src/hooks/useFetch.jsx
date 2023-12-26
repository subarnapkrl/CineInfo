import React, { useEffect, useState } from 'react'

function useFetch(apiPath,queryTerm="") {
    const [data,setData]=useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=425c2b1ee5d1bc874cf73844d4991621&query=${queryTerm}`
    useEffect(()=>{
    async function fetchMovies(){
      const response=await fetch(url);
      const json=await response.json();
      setData(json.results)
    }
    fetchMovies()
  },[url])


  return {data}
}

export default useFetch