import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='row ' style={{ marginTop: '170px' }}>
        <div className='col-12 text-center mb-5 '>
          <h1 className='fs-6 fs-lg-2'>We pioneered the discount broking model in India.
            Now, we are breaking ground with our technology.</h1>
        </div>

        <div className='row border-top p-lg-5 ' style={{lineHeight: "2", textAlign:'justify'}}>
          <div className='col-12 col-lg-6 p-lg-5'>
            <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

            <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

            <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
          </div>
          <div className='col-12 col-lg-6 p-lg-5' >
            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

            <p><span>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <span>blog</span> or see what the media is <span>saying about us</span> or learn more about our business and product <span>philosophies</span>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero