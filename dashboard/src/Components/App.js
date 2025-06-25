import React, { useEffect, useState } from 'react'
import { VerticalChart } from './VerticalChart'
import axios from 'axios'

const App = () => {
  const [holdings, setHoldings] = useState([])

  useEffect(() => {
    axios.get('https://zerodha2-1.onrender.com/allHoldings')
      .then((res) => {
        setHoldings(res.data)
      })
  }, [])

  const labels = holdings.map((stock) => stock['name'])

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: holdings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  }

  return (
    <div className='app'>
      <VerticalChart data={data} />
    </div>
  )
}

export default App
