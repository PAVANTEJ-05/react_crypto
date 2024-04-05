import React,{useState,useEffect}from "react"
export default function Form(){
    return(
        <form onSubmit={e=>{e.preventDefault();}}>
        <input type='text' placeholder="Search here"/>
      <button>submit</button>
      </form> 
    )
}