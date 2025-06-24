import React from 'react'

const Stats = () => {
  return (
    <div className='container mt-5 p-2 p-lg-5'>
      <div className='row'>
        <div className='col-12 col-lg-5 p-4'>
          <h1 className='mb-5'>Trust with confidence</h1>
          <h5>Customer-first always</h5>
          <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

          <h5 className='mt-5'>No spam or gimmicks</h5>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<span className='text-primary'> Our philosophies.</span></p>

          <h5 className='mt-5'>The Zerodha universe</h5>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h5 className='mt-5'>Do better with money</h5>
          <p className='text-muted'>With initiatives like <span className='text-primary'>Nudge</span> and <span className='text-primary'>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-1 p-4'></div>
        <div className='col-12 col-lg-6'>
          <img src='media/Images/ecosystem.png' alt='ecosystem-img' style={{width: '100%'}} />
          <div className='text-center'>
            <a href="/" className='mx-3 text-decoration-none'>Explore our products →</a>
            <a href="/" className='text-decoration-none'>Try Kite demo →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats