import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='container text-center mt-5 mb-5'>
            <div className='row'>
                <div className='col-5'>
                       <h1 className='mt-5 text-start'>404 Page Not Found</h1>
                <p className='fs-5 text-muted mt-3 text-start'>We couldn’t find the page you were looking for. Visit Zerodha’s <Link to={'/'}> home page</Link></p>
                </div>
                <div className='col-5'></div>
                <div className='col-5'></div>
            </div>
        </div>
    )
}

export default NotFound