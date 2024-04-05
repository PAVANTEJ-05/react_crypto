import React from "react";
import { useState,useEffect } from "react";
import Sort from "./sort";

export default function Data(){
  const [data,setData]=useState([]);
 
  useEffect(()=>{
    // fetch("https://api.coincap.io/v2/assets")
    //   .then(response => {return response.json()})
   fetch(
    
     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
  .then(data => { return data.json()})
  .then(data => { setData(data) })
  .catch(err => console.log(err))
},[]);
return(
<p>
    { data.map((data)=>{ return <Sort key={data.rank}
     image={data.image} 
     symbol={data.symbol}
     price={data.current_price}
     rank={data.market_cap_rank}>
     </Sort>})
    }</p>
    )
    }