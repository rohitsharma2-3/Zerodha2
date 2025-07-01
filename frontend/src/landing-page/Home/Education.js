import React from 'react'

const Education = () => {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <img src='media\Images\education.svg' alt='ed-img' style={{width: '100%'}}/>
        </div>
        <div className='col-12 col-lg-6 pt-5'>
          <h2>Free and open market education</h2>
          <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='' className='text-decoration-none'>Varsity →</a>
          <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='' className='text-decoration-none'>TradingQ&A  →</a>
        </div>
      </div>
    </div>
  )
}

export default Education
