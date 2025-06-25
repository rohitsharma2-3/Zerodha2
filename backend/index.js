require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Holding = require('./models/HoldingModel')
const Position = require('./models/PositionModel')
const Order = require('./models/OrderModel')
const User = require('./models/SignupModel')

const cors = require('cors')
const bodyParser = require('body-parser')
const jsonWebToken = require('jsonwebtoken')

app.use(bodyParser.json())
app.use(express.json());
app.use(cors({
    origin: 'https://zerodha2-2.onrender.com', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));

const PORT = process.env.PORT || 8000
const mongoDb = process.env.MONGO_URL
const jwtToken = process.env.JWT_SECRET

app.post('/newOrder', async (req, res) => {
    const { name, qty, price, mode } = req.body;
    const newOrder = new Order({
        name,
        qty,
        price,
        mode
    });

    await newOrder.save();
    res.send('Order Saved');
});

app.get('/orders', async (req, res) => {
    let newOrders = await Order.find({})
    res.json(newOrders)
})

app.get('/orders/:id', async (req, res) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.json(order);
});

app.put('/orders/:id', async (req, res) => {
    const { id } = req.params;
    const { price, qty } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(id, { price, qty });
    res.json(updatedOrder);
});

app.delete('/orders/:id', async (req, res) => {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    res.json(deletedOrder);
})

app.get('/allHoldings', async (req, res) => {
    let allHoldings = await Holding.find({})
    res.json(allHoldings)
})

app.get('/allPostions', async (req, res) => {
    let allPostions = await Position.find({})
    res.json(allPostions)
})

app.post('/signup', async (req, res) => {
    let check = await User.findOne({
        email: req.body.email
    })

    if (check) {
        return res.json({
            success: false,
            error: 'Existing user find with same email.'
        })
    }

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    await user.save()

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jsonWebToken.sign(data, jwtToken)
    res.json({ success: true, token })
})

app.post('/login', async (req, res) => {
    let user = await User.findOne({
        email: req.body.email
    })

    if (user) {
        const passCompare = req.body.password === user.password
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }

            const token = jsonWebToken.sign(data, jwtToken)
            res.json({ success: true, token })
        } else {

            res.json({
                success: false,
                errors: "Wrong password"
            })
        }
    } else {
        res.json({
            success: false,
            errors: 'Wrong email id'
        })
    }
})

app.listen(PORT, () => {
    console.log(`Port is listing on : http://localhost:${PORT}`)
    mongoose.connect(mongoDb)
    console.log('mongoDb Connected')
})
