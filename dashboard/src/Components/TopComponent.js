import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopComponent.css'; // ← Custom CSS here

const TopComponent = () => {
    const [currSelected, setCurrSelected] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Dashboard", path: "/" },
        { label: "Orders", path: "/orders" },
        { label: "Holdings", path: "/holdings" },
        { label: "Positions", path: "/positions" },
        { label: "Funds", path: "/funds" },
        { label: "Chart", path: "/chats" },
    ];

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        window.location.href = `https://zerodha2-2.onrender.com?logout=true`;
    };

    return (
        <header className="menu_container">
            {/* Logo and hamburger */}
            <div className="logo_toggle">
                <Link to="/">
                    <img
                        src="https://tse2.mm.bing.net/th?id=OIP.WlMD0imFAaSYYRwwI2mcvAHaHa&pid=Api&P=0&h=180"
                        alt="Logo"
                        className="logo"
                    />
                </Link>
                <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
            </div>

            {/* Nav List */}
            <nav className={`nav_list ${isMenuOpen ? 'open' : ''}`}>
                <ul className="list_container">
                    {menuItems.map((item, idx) => (
                        <li key={idx}>
                            <Link
                                to={item.path}
                                onClick={() => {
                                    setCurrSelected(idx);
                                    setIsMenuOpen(false); 
                                }}
                                className={currSelected === idx ? 'active' : ''}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="divider"></div>

                <button className="logout_btn" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </header>
    );
};

export default TopComponent;
