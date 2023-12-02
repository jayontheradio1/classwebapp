const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./Models/User');

const app = express();
app.use(cors());
app.use(express.json());

const atlasUri = "mongodb+srv://mahindrajayawardhan:QPP7qciOMQWe9keu@cluster0.tws2dnp.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB Atlas connection string
mongoose.connect(atlasUri)
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/api/register', async (req, res) => {
    // Registration endpoint logic here
});

app.post('/api/login', async (req, res) => {
    // Extract username and password from request body
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // User matched, create and assign a token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: 3600 }); // Replace 'your_jwt_secret' with your secret key

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username
                // Add any other user info you want to send
            }
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.listen(5000, () => console.log('Server started on port 5000'));
