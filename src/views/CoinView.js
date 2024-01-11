import millify from 'millify'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CoinView = ({ coins }) => {
    const sortedCoins = [...coins].sort((a, b) => b.changePercent24Hr - a.changePercent24Hr).slice(0, 3);

    const navigate = useNavigate();

    return (
        <div className='container'>
            <h1 className='display-5 mt-5'>
                Look first/Then leap.
            </h1>
            <h2 className='display-6 w-75'>
                The best trades require research, then commitment.
            </h2>

            <div className='row my-4'>
                {sortedCoins.map((coin, index) =>
                    <div onClick={() => navigate(`/${coin.id}`)} className='col' key={index}>
                        <div className='p-4 border rounded'>
                            <p className='text-end mb-0'>{index + 1}.</p>
                            <p className='fw-light h5'>{coin.symbol} {coin.name} </p>
                            <p className={`mb-0 display-6 text-${coin.changePercent24Hr > 0 ? "success" : "danger"}`}>%{Number(coin.changePercent24Hr).toFixed(2)}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">rank</th>
                        <th scope="col">name</th>
                        <th scope="col" className='text-end'>priceUsd</th>
                        <th scope="col" className='text-end'>marketCapUsd</th>
                        <th scope="col" className='text-end'>volumeUsd24Hr</th>
                        <th scope="col" className='text-end'>changePercent24Hr</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map(coin =>
                        <tr onClick={() => navigate(`/${coin.id}`)} key={coin.rank}>
                            <td>{coin.rank}</td>
                            <th><span className={`fw-light me-1 badge ${coin.changePercent24Hr <= 0 ? 'bg-danger' : 'bg-success'}`}>{coin.symbol} </span>
                                <span className={`${coin.changePercent24Hr <= 0 ? 'text-danger' : 'text-success'}`}>{coin.name}</span> </th>
                            <td className='text-end'>{millify(coin.priceUsd)}</td>
                            <td className='text-end'>{millify(coin.marketCapUsd)}</td>
                            <td className='text-end'>{millify(coin.volumeUsd24Hr)}</td>
                            <td className='text-end'><span className={`${coin.changePercent24Hr <= 0 ? 'text-danger' : 'text-success'}`}>%{Number(coin.changePercent24Hr).toFixed(2)}</span></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CoinView