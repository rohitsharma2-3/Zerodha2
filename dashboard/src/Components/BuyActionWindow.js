import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './BuyActionWindow.css';

const BuyForm = () => {
  const { uid } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const handleBuy = async () => {
      await axios.post('https://zerodha2-1.onrender.com/newOrder', {
        name: uid, 
        qty: quantity,
        price: price,
        mode: 'Buy',
      });
      alert('Order placed successfully!');
  };

  const handleSell = async () => {
      await axios.post('https://zerodha2-1.onrender.com/newOrder', {
        name: uid, 
        qty: quantity,
        price: price,
        mode: 'Sell',
      });
      alert('Order placed successfully!');
  };

  
  return ( 
    <div className="buy-form-container form_container">
      <div className="buy-form-box">
        <h5>Buying: {uid}</h5>
        <div className="form-row">
          <label>Qty.</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Price</label>
          <input
            type="number"
            value={price}
            min="1"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="margin-info">
          Margin required ₹{(quantity * price).toFixed(2)}
        </div>
        <div className="button-group">
          <button className="btn btn-primary" onClick={handleBuy}>Buy</button>
          <button className="btn btn-danger" onClick={handleSell}>Sell</button>
          <Link to="/"><button className="btn btn-secondary">Cancel</button></Link>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
