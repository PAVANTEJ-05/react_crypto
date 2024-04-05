// import React from "react";
export default function Sort({id,symbol,image,price,rank}){
    return(
        <ol>
            <li key={id} value={rank}>
                <img src={ image} alt={symbol}></img>
                <p>{symbol}  ${price}</p>
            </li>
        </ol>
    )
}