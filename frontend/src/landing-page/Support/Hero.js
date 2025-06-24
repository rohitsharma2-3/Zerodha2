import React from 'react'

const Hero = () => {
    return (
        <section style={{ backgroundColor: '#387ED1', color: 'white' }} >
            <div className='container'>
                <div className='d-flex justify-content-between mt-5 p-5' >
                    <h4>Support portal</h4>
                    <p style={{ textDecoration: 'underline' }}>Track tickets</p>
                </div>
                <div className='row p-5'>
                    <div className='col-7'>
                        <h3>Search for an answer or browse help topics to create a ticket</h3>
                        <input className='mt-3 p-3 w-100' placeholder='Eg: how do i activate F&O, why is my order getting rejected...' />
                        <p style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '1.3rem' }}>
                            <a href="/" className='text-white'>Track account opening</a>
                            <a href="/" className='text-white'>Track segment activation</a>
                            <a href="/" className='text-white'>Intraday margins</a>
                            <a href="/" className='text-white'>Kite user manual</a>
                        </p>
                    </div>
                    <div className='col-5 text-align-center d-flex flex-column justify-content-center'>
                        <h3>Featured</h3>
                        <ol>
                            <li>Surveillance measure on scrips - June 2025
                            </li>
                            <li className='mt-2'>Rights Entitlements listing in June 2025</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero