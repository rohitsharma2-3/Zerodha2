import React from 'react'
import Summary from './Summary'
import Orders from './Orders'
import { Routes, Route } from 'react-router-dom'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import App from './App'
import WatchList from './WatchList'
import ButActionWindow from './BuyActionWindow'
import { useEffect } from 'react';
import Update from './Update'

const Dashboard = () => {

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const user = params.get('user');

        if (token) {
            localStorage.setItem('auth-token', token);
        }

        if (user) {
            localStorage.setItem('user', user);
        }

        if (token || user) {
            window.history.replaceState({}, document.title, '/');
        }
    }, []);


    return (
        <div className='d-flex'>
            <div className='about_page'>
                <WatchList />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/chats" element={<App />} />
                    <Route path="/form/:uid" element={<ButActionWindow />} />
                </Routes>
            </div>

        </div>
    )
}

export default Dashboard