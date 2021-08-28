import React from 'react';

const CoinRow = ({ coin, index }) => {
  return (
    <tr key={coin.name}>
      <td>{coin.name}</td>
    </tr>
  );
};

export default CoinRow;
