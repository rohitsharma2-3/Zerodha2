import React, { useState } from 'react';
// import axios from 'axios'

const SignUp = () => {
  const [login, setLogin] = useState('Login')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: '',
      email: '',
      password: '',
    });
    console.log(formData)
  };

  const loginFun = async () => {
    let respData;
    await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)

    }).then((res) => res.json())
      .then((data) => respData = data)

    if (respData.success) {
      localStorage.setItem('auth-token', respData.token)
      localStorage.setItem('username', formData.username)
      window.location.replace('/')
    } else {
      alert(respData.error)
    }
  }

  const signUpFun = async () => {
    let respData;
    await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json())
      .then((data) => respData = data)

    if (respData.success) {
      localStorage.setItem('auth-token', respData.token)
      localStorage.setItem('username', formData.username)
      window.location.replace('/')
    } else {
      alert(respData.error)
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 shadow rounded-4 bg-white" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4" style={{ fontWeight: '600' }}>{login}</h2>
        <form onSubmit={handleSubmit}>

          {login === 'Sign Up' ?
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="form-control mb-3 border-0 border-bottom rounded-0"
              value={formData.username}
              onChange={handleChange}
              required

            /> : null}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3 border-0 border-bottom rounded-0"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3 border-0 border-bottom rounded-0"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="mb-3">
            {login === 'Sign Up' ?
              <p>Already have an account? &nbsp; <span className='text-danger fw-bold' onClick={() => setLogin("Login")}>Login</span></p> :
              <p>Create a new account? &nbsp; <span className='text-danger fw-bold' onClick={() => setLogin("Sign Up")}>SignUp</span></p>}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" required />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-dark w-100 rounded-0" onClick={() => {
            login === "Login" ? loginFun() : signUpFun()
          }}>{login === "Sign Up" ? "Sign Up" : "Login"}</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
