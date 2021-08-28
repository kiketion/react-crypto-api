import Reac from 'react';

const TableCoins = ({ coins }) => {
  return (
    <table>
      <thread>
        <tr>
          <td>name</td>
        </tr>
      </thread>
      <tbody>
        {coins.map((coin) => (
          <tr>{coin.name}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
