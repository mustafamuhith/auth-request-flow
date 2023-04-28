const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const mockUser = {
    username: 'authguy',
    password: 'mypassword',
    profile: {
        firstName: 'Chris',
        lastName: 'Wolstenholme',
        age: 43
    }
};

router.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === mockUser.username && password === mockUser.password) {
        const token = jwt.sign(mockUser.username, secret)
        res.json ({ token })
    }
});

router.get('/profile', (req, res) => {
    const auth = req.headers["authorization"]
    const token = auth.split(" ")[1]
    try {
        jwt.verify(token, secret)
        res.json(mockUser.profile)
    } catch (error) {
        res.json({error: error.message})
    }
});


module.exports = router;
