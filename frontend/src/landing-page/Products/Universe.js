import React from 'react'
import Box from './Box.js'

const Universe = () => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='text-center'>
          <p className='fs-5'>Want to know more about our technology stack? Check out the <span>Zerodha.tech</span>  blog.</p>
          <h1 className='mt-5 pt-5'>The Zerodha Universe</h1>
          <p className='mt-3'>Extend your trading and investment experience even further with our partner platform</p>
        </div>
        <div className='row text-center px-5'>
          <div className='col-4 p-5 '>
            <Box img={'media/Images/zerodhaFundhouse.png'} paragraph='Our asset management venture that is creating simple and transparent index funds to help you save for your goals.' />
            <Box img={'media/Images/streakLogo.png'} paragraph='Systematic trading platform that allows you to create and backtest strategies without coding.' />
          </div>
          <div className='col-4 p-5'>
            <Box img={'media/Images/sensibullLogo.svg'} paragraph='Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.' />
            <Box img={'media/Images/smallcaseLogo.png'} paragraph='Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.' />
          </div>
          <div className='col-4 p-5'>
            <Box img={'media/Images/zerodhaFundhouse.png'} paragraph='Investment research platformthat offers detailed insights on stocks,sectors, supply chains, and more.' />
            <Box img={'media/Images/dittoLogo.png'} paragraph='Investment research platformthat offers detailed insights on stocks,sectors, supply chains, and more.' />

          </div>
             <button className='btn btn-primary p-2 mt-3 mb-5 fs-5 fw-medium m-auto' style={{width: '171px'}}>Sign up for free</button>
        </div>
      </div>
    </div>
  )
}

export default Universe