// import React from "react";
import './Data.css'

export default function Sort({id,symbol,image,price,rank,cap}){
    return(
        <div key={rank} className="image" >
            <p  value={rank}>
                {rank}. </p>  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;      
               <a href={image} target='blank'><img src={ image} alt={symbol}  ></img></a> 
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <p className='props'>{id}</p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <p className='props'>{symbol} </p>  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <p className='props'>${price}</p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <p className='props'>${cap}</p>
           
            </div>
        
    )
}