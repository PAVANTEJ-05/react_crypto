import React from "react";
import { useState,useEffect } from "react";
import Sort from "./sort";
import './Data.css' 
// import INFO from './info.json'

export default function Data(){
  const [data,setData]=useState([]);
 
  useEffect(()=>{
    // fetch("https://api.coincap.io/v2/assets")
    //   .then(response => {return response.json()})
    const fetchData= async ()=>{ try{ const result=await fetch(
     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=90&page=1&sparkline=false'
    )
  const response= await result.json();
  setData(response);
  }
   catch (error){
        console.log(error)
   }}

   fetchData();
 
  },[]); 
  const [search ,setSearch]=useState('')
    const changeHandle=(e)=>{setSearch(e.target.value)}
  const filteredCoins=data.filter((coin) => { return coin.id.toLowerCase().includes(search.toLowerCase())})
  
  function Button(){
    return(<div>
        <form >
             <input type='text'autoFocus='on' placeholder="Search here" className="search"
             value={search} onChange={changeHandle}
             />
        </form>
         </div>)
}
return(
<p><div className="list"><Button ></Button><br></br>
    { filteredCoins.map((data)=>{ return <Sort key={data.rank}
    id={data.id}
     image={data.image} 
     symbol={data.symbol}
     price={data.current_price}
     rank={data.market_cap_rank}
     cap={data.market_cap}>
     </Sort>})
}</div>
</p>
    )
    }