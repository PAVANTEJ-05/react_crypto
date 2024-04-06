// import React from "react";
import './Data.css'

export default function Sort({id,symbol,image,price,rank,cap}){
    return(
        <div className="image" >
            <p key={rank} value={rank}>
                {rank}. </p>  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;      
                <img src={ image} alt={symbol} ></img>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <p className='props'>{id}</p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <p className='props'>{symbol} </p>  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <p className='props'>${price}</p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <p className='props'>${cap}</p>
           
            </div>
        
    )
}