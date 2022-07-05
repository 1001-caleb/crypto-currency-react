import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [coins, setCoins] = useState([]);

  const getCoins = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins')
    const data = await response.json();
    setCoins(data);
    //  console.log(coins)

  }

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Price 24h</th>
          </tr>
        </thead>
        <tbody>
          {
            coins.map((coin) => {
              return (<tr key={coin.id}>
                <td>{coin.market_data.market_cap_rank}</td>
                <td><small><img src={coin.image.small} /> {coin.name} </small></td>
                <td>{coin.symbol.toUpperCase()}</td>
                <td>{coin.market_data.current_price.bmd.toFixed(2)}</td>
                <td>
                  {coin.market_data.price_change_percentage_24h < 0 ? (
                    <span className='badge bg-danger'>{coin.market_data.price_change_percentage_24h}</span>
                  ) : (
                    <span className='badge bg-success'>{coin.market_data.price_change_percentage_24h}</span>
                  )}
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
