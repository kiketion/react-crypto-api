import React from 'react';
import CoinRow from './CoinRow';

const TableCoins = ({ coins }) => {
  return (
    <table className='table table-dark mt-4 table-hover'>
      <thread>
        <tr>
          <td>name</td>
        </tr>
      </thread>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow coin={coin} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
