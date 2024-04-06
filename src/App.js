import React from "react";
import Data from "./components/data";
import './App.css'
import './components/Data.css'
export default function App(){
  return(<div className="App">
    <h1>REAL-TIME CRYPTOCURRENCY PRICES</h1>
    <Data ></Data>
    <p className='footer'>No more data available.</p>
</div>)
}
// import './App.css';
// import { useState, useEffect } from 'react';
// import Coin from './components/button';

// function App() {
//   const [coins, setCoins] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetch(
//       'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
//     )
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setCoins(data);
//         console.log(data);
//       })
//       .catch(error => console.error('There was a problem with the fetch operation:', error));
//   }, []);

//   const handleChange = e => {
//     setSearch(e.target.value);
//   };

//   const filteredCoins = coins.filter(coin =>
//     coin.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className='coin-app'>
//       <div className='coin-search'>
//         <h1 className='coin-text'>Search a currency</h1>
//         <form>
//           <input
//             className='coin-input'
//             type='text'
//             onChange={handleChange}
//             placeholder='Search'
//           />
//         </form>
//       </div>
//       {filteredCoins.map(coin => {
//         return (
//           <Coin
//             key={coin.id}
//             name={coin.name}
//             price={coin.current_price}
//             symbol={coin.symbol}
//             marketcap={coin.total_volume}
//             volume={coin.market_cap}
//             image={coin.image}
//             priceChange={coin.price_change_percentage_24h}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
