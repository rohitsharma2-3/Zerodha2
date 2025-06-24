import React from 'react'

const RightStructure = ({ img, heading, paragraph, text1, text2 }) => {
  return (
    <div className='container'>
      <div className='row p-lg-5 d-flex justify-content-center align-items-center'>
        <div className='col-12 col-lg-4 text-start mt-5'>
          <h1>{heading}</h1>
          <p className='mt-4'>{paragraph}</p>
          <p className='d-flex gap-3'><span>{text1}</span>
            <span>{text2}</span> </p>
        </div>
        <div className='col-1'></div>
        <div className='col-12 col-lg-5'>
          <img src={img} alt='img'style={{width:'100%'}} />
        </div>
        <div className='col-1'></div>
      </div>
    </div>
  )
}

export default RightStructure