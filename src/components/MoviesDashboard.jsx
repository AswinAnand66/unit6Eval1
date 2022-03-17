import React, { useDebugValue, useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import {filterByGenre, getMovieData} from "../Redux/actions"
import { EachMovie } from "./EachMovie";
import "./Styles/MoviesData.css"

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [allData,setAllData]=useState([])

  const dispatch=useDispatch();
  const data =useSelector(state=>state.data)
  const filterData=useSelector(state=>state.filterData)
  

    // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store 
   getData()
  }, [dispatch]);
const getData=()=>{
     //dispatch(getMovieData())
  axios.get('https://movie-fake-server.herokuapp.com/data').then(resp => {
    dispatch(getMovieData(resp.data))
    console.log(resp.data);
});
 
}

//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
    console.log(e.target.value)
    var newData=data.filter((movie)=>movie.genre==e.target.value);
    console.log("newData",newData);
   newData? dispatch(filterByGenre(newData)):null;
}

console.log("data",data)
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
        {genres.map((e)=>(<option value={e}>{e}</option>))}
      
      </select>
      <div className = "movies-list">
       {filterData.length>0?filterData.map((e)=>{
         return <EachMovie key={e.id} e={e}/>
       }):data.map((e)=>{
         return <EachMovie key={e.id} e={e}/>
       })}
      </div>
    </>
  );
};
