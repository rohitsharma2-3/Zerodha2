import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='media\Images\largestBroker.svg' alt='largest-broker' />
        </div>
        <div className='col-6 p-5 mt-4'>
          <h1>Largest stock broker in india</h1>
          <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
          <div className='row mt-5 text-muted'>
            <div className='col-6'>
              <ul>
                <li>
                  Futures and Options
                </li>
                <li>
                  Commodity derivatives
                </li>
                <li>
                  Currency derivatives
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>
                  Stocks & IPOs
                </li>
                <li>
                  Direct mutual funds
                </li>
                <li>
                  Bonds and Govt. Securities
                </li>
              </ul>
            </div>
            <img src='media\Images\pressLogos.png' alt='press-Logos' className='mt-5' style={{width: '90%'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards