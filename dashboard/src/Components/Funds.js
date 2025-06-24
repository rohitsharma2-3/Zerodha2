import React from 'react'

const Funds = () => {
  return (
    <div className='fund p-5'>
      <div className='row'>
        <div className='col7'></div>
        <div className='col5'>
          <p>Instant, zero-cost fund transfers with UPI</p>
          <div className='d-flex gap-3'>
            <button className='btn btn-outline-primary'>Add Funds</button>
            <button className='btn btn-outline-success'>Widthdraw</button>
          </div>
        </div>
      </div>
      <h4 className='text-muted pt-5 '>Equity</h4>
      {/* <div className='row'> */}
        <div className='col-4 border text-muted mt-1 p-4'>
          <p>Available margin </p>
          <p>Used margin </p>
          <p>Available cash </p>
          <hr/>
          <p>Opening Balance margin </p>
          <p>Opening Balance margin </p>
          <p>Paying </p>
          <p>SPAN </p>
          <p>Delivery margin </p>
          <p>Exposure </p>
          <p>Options premium </p>
          <hr/>
          <p>Collateral (Liquid funds) </p>
          <p>Collateral (Equity) </p>
          <p>Total collateral </p>
        </div>
      </div>
    // </div>
  )
}

export default Funds