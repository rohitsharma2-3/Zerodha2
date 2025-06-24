import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Summary = () => {
    const [username, setUsername] = useState('');
    const [allHoldings, setAllHoldings] = useState([])

    const totalInvestment = [...allHoldings,].reduce(
        (acc, stock) => acc + stock.avg * stock.qty, 0
    );
    const totalCurrentValue = [...allHoldings].reduce(
        (acc, stock) => acc + stock.price * stock.qty, 0
    );
    const totalPnL = totalCurrentValue - totalInvestment;
    const pnlClass = totalPnL >= 0 ? "text-success" : "text-danger";
    const pnlPercentage = ((totalPnL / totalInvestment) * 100).toFixed(2);

    useEffect(() => {
        const storedUsername = localStorage.getItem('user');
        if (storedUsername) {
            setUsername(storedUsername);
        }
        axios.get('http://localhost:8000/allHoldings')
            .then((res) => {
                setAllHoldings(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div className='summary  text-muted'>
            <div className='mt-5 '>
                <h3>Hi, {username || "User"}</h3>
                <hr />
            </div>
             <div className='row mt-5 text-muted'>
            <h4 className='mb-5'>Equity</h4>
            <div className='col-4'>
               <div >
                    <h2>53.74K</h2>
                    <p>Margin available</p>
                </div>
            </div>
            <div className='col-4'>
              <h3>0</h3>
              <p>Margin used </p>
            </div>
            <div className='col-4'>
              <h3 >53.74k</h3>
              <p>Opening balance </p>
            </div>
          </div>
            
            <hr />
          <div className='row mt-5 pt-5 text-muted'>
            <h4 className='mb-5'>Holdings</h4>
            <div className='col-4'>
              <h3>{totalInvestment.toFixed(2)}</h3>
              <p>Total investment</p>
            </div>
            <div className='col-4'>
              <h3>{totalCurrentValue.toFixed(2)}</h3>
              <p>Current value</p>
            </div>
            <div className='col-4'>
              <h3 className={pnlClass}>
                {totalPnL.toFixed(2)} ({pnlPercentage}%)
              </h3>
              <p>P&L</p>
            </div>
          </div>
            <hr />
        </div>
    )
}

export default Summary