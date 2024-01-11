import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import { Line, Bar } from "react-chartjs-2"
import millify from 'millify'

const DetailView = ({ model }) => {
    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        label: false,
        legend: { display: false },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false
                },
                ticks: {
                    display: false
                }

            },
            y: {
                grid: {
                    display: true,
                },
                border: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        }
    }

    return (
        <div className='container mt-5'>
            <h1 className={`display-4 ${model?.coin?.detail?.changePercent24Hr > 0 ? "text-success" : "text-danger"}`}>
                {model?.coin?.detail?.symbol} {model?.coin?.detail?.name}
            </h1>
            <div className='row'>
                {model?.infoFields?.map(data =>
                    <div className='col' key={data.label}>
                        <div className='card mb-3'>
                            <div className='card-body'>
                                <div>{data.label}</div>
                                <div>{millify(data.value)}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='row mt-2'>
                <div className='col-md-12'>
                    <p className='fw-light'>Whole time period</p>
                    <Line data={model.chartData} options={options} />
                </div>
                <div className='col-md-12 mt-5'>
                    <p className='fw-light'>Last 3 months</p>
                    <Bar height={30} data={model.chartDataTwo} options={options} />
                </div>
            </div>
        </div>
    )
}

export default DetailView