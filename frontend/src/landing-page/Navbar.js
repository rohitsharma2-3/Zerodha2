import { Link } from 'react-router-dom';

const Navbar = () => {
  const params = new URLSearchParams(window.location.search);
  const shouldLogout = params.get('logout');

  if (shouldLogout === 'true') {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    window.location.replace('/');
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 fixed-top border-bottom shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/Images/logo.svg"
            alt="logo"
            style={{ width: '120px' }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {localStorage.getItem('auth-token')
              ? <>
                <button className='btn mx-4' onClick={() => {
                  localStorage.removeItem('auth-token');
                  localStorage.removeItem('user');
                  window.location.replace('/')
                }}>Logout</button>

                <button
                  className='btn btn-outline-success active'
                  onClick={() => {
                    const token = localStorage.getItem('auth-token');
                    const user = localStorage.getItem('username');
                    window.location.href = `https://zerodha1-cm9e.onrender.com?token=${token}&user=${user}`;
                  }}
                >
                  Dashboard
                </button>

              </>
              : <Link className="nav-link active" to="/signup">
                Signup
              </Link>}

            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
