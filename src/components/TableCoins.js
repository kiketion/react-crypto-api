import Reac from 'react';

const TableCoins = ({ coins }) => {
  return (
    <table className='table table-dark mt-4 table-hover'>
      <thread>
        <tr>
          <td>name</td>
        </tr>
      </thread>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.name}>
            <td>{coin.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
