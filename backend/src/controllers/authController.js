const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Fungsi untuk membuat token JWT
const signToken = (user) => {
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email
      },
      process.env.JWT_SECRET, {
        expiresIn: '1d'
      }
    );
};

exports.registerLocal = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const { username, email, password } = req.body;

        const newUser = new User({
            method: 'local',
            username,
            email,
            password
        });

        await newUser.save();

        const token = signToken(newUser._id);

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: { id: newUser._id, username: newUser.username, email: newUser.email }
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
};

exports.socialLogin = (req, res) => {
    if (!req.user) {
        return res.status(400).send('Terjadi kesalahan saat autentikasi.');
    }

    const token = signToken(req.user);

    // Render halaman HTML dengan skrip untuk mengirim token
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Authentication Success</title>
        </head>
        <body>
            <script>
                window.opener.postMessage({ token: "${token}" }, "${process.env.FRONTEND_URL}");
                window.close();
            </script>
            <p>Authentication successful. You can close this window.</p>
        </body>
        </html>
    `);
};
