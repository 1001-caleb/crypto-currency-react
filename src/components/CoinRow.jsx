
const CoinRow = ({ result }) => {
    return (
        <tr >
            <td>{result.market_data.market_cap_rank}</td>
            <td className="d-flex flex-column center"><small><img src={result.image.small} /> <p>{result.name} </p></small></td>
            <td>{result.symbol.toUpperCase()}</td>
            <td>{result.market_data.current_price.bmd.toFixed(2)}</td>
            <td>
                {result.market_data.price_change_percentage_24h < 0 ? (
                    <span className='badge bg-danger'>{result.market_data.price_change_percentage_24h}</span>
                ) : (
                    <span className='badge bg-success'>{result.market_data.price_change_percentage_24h}</span>
                )}
            </td>
        </tr>
    )
}

export default CoinRow