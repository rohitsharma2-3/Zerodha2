import React, { useState } from 'react'
import { watchlist } from '../data/data'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { DoughnutChart } from './DoughnutChart'
import WatchListAction from './WatchListAction'

const WatchList = () => {
    const data = {
        labels: watchlist.map((stock) => stock['name']),
        datasets: [
            {
                label: 'Price',
                data: watchlist.map((stock) => stock.price),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ]
    }

    return (
        <div>
            <div className='about_chart d-flex'>
                <div className='first_line' style={{ fontSize: '15px' }}>
                    <p>Search e.g.: infy, bse, nifty fut weekly, gold mcx</p>
                    <p>{watchlist.length} / 50</p>
                </div>
            </div>
            <ul>
                {watchlist.map((stock, idx) => {
                    return <WatchListItem stock={stock} key={idx} />
                })}
            </ul>
            <DoughnutChart data={data} />
        </div >
    )
}

export default WatchList

const WatchListItem = ({ stock }) => {

    const [showWatchListAction, setShowWatchListAction] = useState(false)

    const onMouseEnter = (e) => {
        setShowWatchListAction(true)
    }

    const onMouseLeave = (e) => {
        setShowWatchListAction(false)
    }

    return (
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='mouse_hover'>
            <div className='d-flex justify-content-between border-bottom'>
                <p className={stock.isDown ? 'text-success' : 'text-danger'}>{stock.name}</p>
                <div className='d-flex gap-3 p-2'>
                    <span>{stock.percent}</span>
                    <span className={stock.isDown ? 'text-success' : 'text-danger'}>
                        {stock.isDown ? (<KeyboardArrowDown />) : (<KeyboardArrowUp />)}
                    </span>
                    <span>{stock.price}</span>
                </div>
            </div>
            {showWatchListAction && <WatchListAction uid={stock.name} />}
        </li>
    )
}