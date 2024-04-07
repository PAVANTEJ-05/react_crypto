import React from "react";
import Data from "./components/data";
import './App.css'
import './components/Data.css'
export default function App(){
  return(<div className="App">
    <h1>real-time Cryptocurrency Price tracker</h1>
    <Data ></Data>
    <p className='footer'>No more data available.</p>
</div>)
}
