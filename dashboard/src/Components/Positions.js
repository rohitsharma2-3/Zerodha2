import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


const Positions = () => {
   const [positions, setPositions] = useState([])
  
    useEffect(() => {
      axios.get('https://zerodha2-2.onrender.com/allPostions')
        .then((res) => {
          setPositions(res.data)
          console.log(res.data)
        })
    }, [])
  return (
    <div className='position'>
      <h3>Positions ({positions.length})</h3>
      <div className=' row border-bottom border-top mt-3  text-muted'>
        <div className='col-2' style={{ borderRight: '1px solid lightgray' }}>
          <p>Product</p>
        </div>
        <div className='col-4 d-flex justify-content-between' style={{ borderRight: '1px solid lightgray' }}>
          <p>Investment</p>
          <p>Qty</p>
          <p>Avg</p>
        </div>
        <div className='col-6 d-flex justify-content-between'>
          <p>LTP</p>
          <p>P&L</p>
          <p>Chg.</p>
        </div>
      </div>

      {positions.map((stock, idx) => {
        const curValue = stock.price * stock.qty;
        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
        const profClass = isProfit ? "text-success" : "text-danger";
        const dayClass = stock.isLoss ? "text-danger" : "text-success";
        return (
          <div key={idx} className=' row border-bottom border-top'>
            <div className='col-2' style={{ borderRight: '1px solid lightgray' }}>
              <p>{stock.product}</p>
            </div>
            <div className='col-4 d-flex justify-content-between' style={{ borderRight: '1px solid lightgray' }}>
              <p>{stock.name}</p>
              <p>{stock.qty}</p>
              <p>{stock.avg.toFixed(2)}</p>
            </div>
            <div className='col-6 d-flex justify-content-between'>
              <p>{stock.price.toFixed(2)}</p>
              <p className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</p>
              <p className={dayClass}>{stock.day}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Positions
