import React from 'react'

const Team = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>People</h1>
      <div className='row p-5 '>
        <div className='col-6 p-5 text-center'>
          <img src='https://avatars.githubusercontent.com/u/210226067?s=400&u=be71970fa9867793fc4d6337e1c79de966cf3462&v=4' alt='img' style={{ borderRadius: '100%', width: '60%' }} />
          <h2>Rohit Sharma</h2>
          <p>Founder & CEO</p>
        </div>
        <div className='col-6 pt-5 text-start mt-3'>
          <p>Rohit is a passionate MERN Stack Developer with hands-on experience in building and deploying full-stack web applications using React, Node.js, MongoDB, and Express. He has a strong grip on frontend design with Tailwind CSS, and is proficient in version control using Git and GitHub.</p>

          <p>He has developed multiple full-stack personal and academic projects, including a Travel Booking Web App with features like authentication, image uploads, and booking management. His deployment experience spans platforms like Netlify and Render.</p>

          <p>Currently pursuing IMSC-IT from Silver Oak University with a CGPA of 8.7 (graduating in 2025).</p>

          <p>Connect on <span>GitHub</span>  / <span>LinkedIn</span>  / <span>Twitter</span> (update with your actual links)</p>
      </div>
    </div>
    </div >
  )
}

export default Team