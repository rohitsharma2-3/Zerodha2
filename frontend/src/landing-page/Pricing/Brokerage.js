import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className='row p-3 p-lg-5'>
        <h1 className='fs-3'>Charges for account opening</h1>
        <div className='row' style={{borderTop: '1px solid lightgray', borderRight: '1px solid lightgray', borderLeft: '1px solid lightgray'}}>
          <div className='col-12 col-lg-10 p-lg-2'>
            <p>Type of account</p>
          </div>
          <div className='col-12 col-lg-2 p-lg-2'>
            <p>Charges</p>
          </div>
        </div>
        <div className='row border'>
          <div className='col-10 p-lg-2 fs-6 fs-lg-4' >
            <p>Online account</p>
            <p>Offline account</p>
            <p>NRI account (offline only)</p>
            <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
          </div>
          <div className='col-2 p-2' style={{fontSize: '10px'}}>
            <p style={{backgroundColor:'green', width: '20%', color:'white', padding: '2px'}}>Free</p>
            <p style={{backgroundColor:'green', width: '20%', color:'white', padding: '2px'}}>Free</p>
            <p>₹ 500</p>
            <p>₹ 500</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brokerage