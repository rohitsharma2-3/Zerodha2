import React from 'react'

const Box = ({ img, paragraph }) => {
  return (
    <div className='mt-5'>
      <img src={img} alt='img' style={{width: '70%'}}/>
      <p>{paragraph}</p>
    </div>
  )
}

export default Box
