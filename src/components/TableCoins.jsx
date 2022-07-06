import { useEffect, useState } from 'react'
import CoinRow from './CoinRow'
const TableCoins = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    const getCoins = async () => {
        const response = await fetch('https://api.coingecko.com/api/v3/coins')
        const data = await response.json();
        setCoins(data);
        //  console.log(coins)

    }

    useEffect(() => {
        getCoins();
    }, []);

    const searcher = (e) => {
        setSearch(e.target.value)
        // console.log(e.target.value);
    }

    const results = !search ? coins : coins.filter((val) => val.name.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div className="App bg-dark h-full">
            <div className='mb-5'>
                <input value={search} onChange={searcher} type='text' placeholder='Search...' className='form-control-lg ' />
            </div>
            
            <div className='table-responsive'>
                <table className='table text-white text-center table-sm align-middle'>
                    <thead className='table-light '>
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
                            results.map((result) => {
                                return (
                                    <CoinRow key={result.id} result={result} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default TableCoins