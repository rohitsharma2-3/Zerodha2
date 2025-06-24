import React from 'react'

const Pricing = () => {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-4'>
          <h2>Unbeatable pricing</h2>
          <p className='mt-5'>We pioneered the concept of discount booking and price tranparency in India. Flat fees and no hidden charges.</p>
          <a href='' className='text-decoration-none'>See pricing →</a>
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
          <div className='row text-center'>
            <div className='col border p-4'>
              <h1>₹0</h1>
              <p className='text-muted mt-4'>Free equilty delivery and direct mutual funds</p>
            </div>
            <div className='col border p-4'>
              <h1>₹20</h1>
              <p className='text-muted mt-4'>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing