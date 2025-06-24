import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 '>
        <div className="p-5 mt-3 text-center">
          <h1>Charges</h1>
          <p className='fs-5 text-muted'>List of all charges and taxes</p>
        </div>
        <div className='row p-5 text-center'>
          <div className='col-4'>
            <img src='media/images/pricing0.svg' alt='' style={{width: '70%'}}/>
            <h1 className='fs-4'>Free equity delivery</h1>
            <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className='col-4'>
            <img src='media/images/intradayTrades.svg' alt='' style={{width: '70%'}} />
            <h1 className='fs-4'>Intraday and F&O trades</h1>
            <p  className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='col-4'>
            <img src='media/images/pricing0.svg' alt='' style={{width: '70%'}} />
            <h1 className='fs-4'>Free direct MF</h1>
            <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero