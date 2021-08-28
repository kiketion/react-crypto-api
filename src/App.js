import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';

function App() {
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <h1>React Crypto Prices</h1>
        <p>
          This is a List of the Most Important Crypto Coins an teheir current
          prices. it`s created in React.js, proyected in Vercel and work by usin
          an API provided by CoinGecko.
        </p>
        <TableCoins coins={coins} />
      </div>
    </div>
  );
}

export default App;
