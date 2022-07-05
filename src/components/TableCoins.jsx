import { useEffect, useState } from 'react'
import CoinRow from './CoinRow'
const TableCoins = () => {
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
                            return (
                                <CoinRow key={coin.id} coin={coin}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default TableCoins