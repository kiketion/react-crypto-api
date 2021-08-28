import React from 'react';
import CoinRow from './CoinRow';

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

const TableCoins = ({ coins }) => {
  return (
    <table className='table table-dark mt-4 table-hover'>
      <thread>
        <tr>
          {titles.map((title) => (
            <td>{title}</td>
          ))}
        </tr>
      </thread>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
