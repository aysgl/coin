import React, { useEffect, useState } from 'react'
import CoinView from '../views/CoinView'
import CoinModel from '../models/CoinModel'
import PaginationView from '../views/PaginationView'

const CoinController = () => {
    const [coins, setCoins] = useState([])
    const [page, setPage] = useState(1)
    const total = Math.ceil(100 / 10);

    const onPageChange = (newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        CoinModel.getCoins(page)
            .then((data) => setCoins(data))
    }, [page])

    return (
        <>
            <CoinView coins={coins} />
            <PaginationView total={total} page={page} onPageChange={onPageChange} />
        </>
    )
}

export default CoinController