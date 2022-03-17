import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { EachMovie } from "./EachMovie";


export const SingleMovieDetails = () => {
let params=useParams();
const data =useSelector(state=>state.data)
let [showData,setShowData]=useState([])

useEffect(()=>{
  filterData()
},[])

const filterData=()=>{
  let newData=data.filter((e)=>(e.id==params.id))
  console.log("newDAta",newData)
  setShowData(newData)
  
  
}
console.log("show",showData)

    // make a request to get the details
 return (
   <div>
     <h1>{showData.map((e)=>{
       return <EachMovie key={e.id} e={e}/>
     })}</h1>
   </div>
 )
};
