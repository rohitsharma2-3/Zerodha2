import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopComponent = () => {
    const [currSelected, setCurrSelected] = useState(0);

    const menuItems = [
        { label: "Dashboard", path: "/" },
        { label: "Orders", path: "/orders" },
        { label: "Holdings", path: "/holdings" },
        { label: "Positions", path: "/positions" },
        { label: "Funds", path: "/funds" },
        { label: "Chart", path: "/chats" },
    ];

    return (
        <div className="menu_container border">
            <Link to={'/'}><img
                src="https://tse2.mm.bing.net/th?id=OIP.WlMD0imFAaSYYRwwI2mcvAHaHa&pid=Api&P=0&h=180"
                alt="img" style={{ width: '50px' }}
            /></Link>

            <div className="nav_list d-flex align-items-center gap-4">
                <ul className="d-flex list-unstyled m-0 gap-4">
                    {menuItems.map((item, idx) => (
                        <li key={idx}>
                            <Link
                                to={item.path}
                                onClick={() => setCurrSelected(idx)}
                                className={`text-decoration-none ${currSelected === idx ? "text-danger fw-bold" : "text-black"}`}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div style={{ width: '1px', height: '25px', backgroundColor: 'gray' }}></div>

                <li className='list-unstyled'
                    onClick={() => {
                        localStorage.removeItem('auth-token');
                        window.location.href = `http://localhost:3000?logout=true`;
                    }}> Logout </li>
            </div>
        </div>
    );
};

export default TopComponent;
