import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([])
  const totalInvestment = [...allHoldings,].reduce(
    (acc, stock) => acc + stock.avg * stock.qty, 0
  );
  const totalCurrentValue = [...allHoldings].reduce(
    (acc, stock) => acc + stock.price * stock.qty, 0
  );
  const totalPnL = totalCurrentValue - totalInvestment;
  const pnlClass = totalPnL >= 0 ? "text-success" : "text-danger";
  const pnlPercentage = ((totalPnL / totalInvestment) * 100).toFixed(2);

  useEffect(() => {
    axios.get('http://localhost:8000/allHoldings')
      .then((res) => {
        setAllHoldings(res.data)
        console.log(res.data)
      })
  }, [])


  return (
    <>
      <div className='holding '>
        <div>
          <h4>Holdings ({allHoldings.length})</h4>
          <div className=' row border-bottom border-top mt-3 text-muted '>
            <div className='col-2' style={{ borderRight: '1px solid lightgray' }}>
              <p>Instruments</p>
            </div>
            <div className='col-3 d-flex justify-content-between' style={{ borderRight: '1px solid lightgray' }}>
              <p>Qty</p>
              <p>Avg.cost</p>
              <p>LTP</p>
            </div>
            <div className='col-7 d-flex justify-content-between'>
              <p>Cur. Val</p>
              <p>P&L</p>
              <p>Net chg.</p>
              <p>Day chg.</p>
            </div>
          </div>

          {allHoldings.map((stock, idx) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "text-success" : "text-danger";
            const dayClass = stock.isLoss ? "text-danger" : "text-success";
            return (
              <div key={idx} className=' row border-bottom border-top '>
                <div className='col-2' style={{ borderRight: '1px solid lightgray' }}>
                  <p>{stock.name}</p>
                </div>
                <div className='col-3 d-flex justify-content-between' style={{ borderRight: '1px solid lightgray' }}>
                  <p>{stock.qty}</p>
                  <p>{stock.avg.toFixed(2)}</p>
                  <p>{stock.price.toFixed(2)}</p>
                </div>
                <div className='col-7 d-flex justify-content-between'>
                  <p>{curValue.toFixed(2)}</p>
                  <p className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</p>
                  <p className={profClass}>{stock.net}</p>
                  <p className={dayClass}>{stock.day}</p>
                </div>
              </div>
            )
          })}

          <div className='row mt-5 pt-5 text-muted'>
            <div className='col-4'>
              <h3>{totalInvestment.toFixed(2)}</h3>
              <p>Total investment</p>
            </div>
            <div className='col-4'>
              <h3>{totalCurrentValue.toFixed(2)}</h3>
              <p>Current value</p>
            </div>
            <div className='col-4'>
              <h3 className={pnlClass}>
                {totalPnL.toFixed(2)} ({pnlPercentage}%)
              </h3>
              <p>P&L</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Holdings