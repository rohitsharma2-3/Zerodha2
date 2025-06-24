import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Orders = () => {
    const [allOder, setAllOrder] = useState([])

    useEffect(() => {
        axios.get('https://zerodha2-2.onrender.com/orders')
            .then((res) => {
                setAllOrder(res.data)
            })
    }, [])

    return (
        <div className='orders '>
            <div>
                <h4>Orders ({allOder.length})</h4>
                <div className=' row mt-3 text-muted ' style={{ borderBottom: '1px solid black', borderTop: '1px solid black' }}>
                    <div className='col-3' style={{ borderRight: '1px solid black' }}>
                        <p>Name</p>
                    </div>
                    <div className='col-3' style={{ borderRight: '1px solid black' }}>
                        <p>Price</p>
                    </div>
                    <div className='col-3' style={{ borderRight: '1px solid black' }}>
                        <p>Qty</p>
                    </div>
                    <div className='col-3'>
                        <p>Mode</p>
                    </div>
                </div>
                {allOder.map((el, i) => {
                    return (
                        <div key={i} className=' row text-dark' style={{ borderBottom: '1px solid black' }}>
                            <div className='col-3' style={{ borderRight: '1px solid black' }}>
                                <p>{el.name}</p>
                            </div>
                            <div className='col-3' style={{ borderRight: '1px solid black' }}>
                                <p>{el.price}</p>
                            </div>
                            <div className='col-3' style={{ borderRight: '1px solid black' }}>
                                <p>{el.qty}</p>
                            </div>
                            <div className='col-2'>
                                <p>{el.mode}</p>
                            </div>
                            <div className='col-3 col-md-1'>
                                <Link to={`/update/${el._id}`}><button className='btn'>Update</button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Orders

