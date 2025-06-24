import React from 'react'
import { Tooltip, Grow } from '@mui/material'
import { BarChartOutlined, MoreHoriz } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const WatchListAction = ({ uid }) => {
    return (
        <>
            <span className='action'>
                <span>
                    <Tooltip title="Buy (B)" placement='top' arrow transitionComponent={Grow}>
                        <Link to={`/form/${uid}`}>
                            <button className='btn btn-success'>Buy</button>
                        </Link>
                    </Tooltip>
                </span>
                <span>
                    <Tooltip title="Analytic (A)" placement='top' arrow transitionComponent={Grow}>
                        <button className='btn btn-light'>
                            <BarChartOutlined />
                        </button>
                    </Tooltip>
                </span>
                <span>
                    <Tooltip title="More" placement='top' arrow transitionComponent={Grow}>
                        <button className='btn btn-light'>
                            <MoreHoriz />
                        </button>
                    </Tooltip>
                </span>
            </span>
        </>
    )
} 

export default WatchListAction