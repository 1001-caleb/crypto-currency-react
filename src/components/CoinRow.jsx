
const CoinRow = ({coin}) => {
    return (
        <tr >
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
}

export default CoinRow