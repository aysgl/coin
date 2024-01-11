import React, { useEffect, useState } from 'react'
import DetailView from '../views/DetailView'
import { useParams } from 'react-router-dom'
import DetailModel from '../models/DetailModel'

const DetailController = () => {
    const [coin, setCoin] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        DetailModel.getCoin(id)
            .then((res) => setCoin(res))
    }, [id])

    const model = new DetailModel(coin)

    return (
        <DetailView model={model} />
    )
}

export default DetailController