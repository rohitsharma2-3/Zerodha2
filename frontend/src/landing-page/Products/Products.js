import React from 'react'
import Hero from './Hero'
import Left from './LeftStructure.js'
import Right from './RightStructure.js'
import Universe from './Universe.js'

const Products = () => {
  return (
    <div>
      <Hero />
      <Left img='media\Images\kite.png' heading='Kite' paragraph='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' text1='Try demo →' text2='Learn more →' />

      <Right img='media\Images\console.png' heading='Console' paragraph='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' text1='Learn more →' />

      <Left img='media\Images\Coin.png' heading='Coin' paragraph='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' text1='Coin →' />

      <Right img='media\Images\KiteConnect.png' heading='Kite Connect API' paragraph='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' text1='Kite Connect →' />

      <Left img='media\Images\Varsity.png' heading='Varsity mobile' paragraph='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' />
      <Universe/>
    </div>
  )
}

export default Products