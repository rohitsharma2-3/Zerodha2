import React from 'react'

const Hero = () => {
  return (
    <div className='container text-center mt-5 pt-5 mb-5'>
      <div className='row  d-flex justify-content-center align-content-center mt-5'>
        <img src='media/Images/homeHero.png' alt='hero-img' style={{width: '70%'}} />
        <h1 className='mt-5'>Invest in everything</h1>
        <p className='fs-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary p-2 mt-3 mb-5 fs-6 fs-lg-5 fw-medium' style={{width: '171px'}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero