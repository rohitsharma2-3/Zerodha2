import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        price: '',
        qty: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/orders/${id}`)
            .then((res) => {
                const { price, qty } = res.data;
                setFormData({ price, qty });
                console.log(res.data)
            })
            .catch((err) => {
                console.error("Failed to fetch order:", err);
            });
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/orders/${id}`);
            navigate('/orders');
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/orders/${id}`, formData);
        navigate('/orders');
    };

    return (
        <div className="mt-5 pt-5 update">
            <h4>Update Order</h4>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="qty"
                        value={formData.qty}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success">Update</button>
                <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>Delete</button>
            </form>
        </div>
    );
};

export default Update;
