const { check } = require('express-validator');
const User = require('../models/User');

exports.registerValidation = [
    check('username')
        .trim()
        .notEmpty().withMessage('Username tidak boleh kosong.')
        .isLength({ min: 3 }).withMessage('Username minimal 3 karakter.')
        .custom(async (value) => {
            const user = await User.findOne({ username: value });
            if (user) {
                return Promise.reject('Username sudah digunakan.');
            }
        }),

    check('email')
        .isEmail().withMessage('Format email tidak valid.')
        .normalizeEmail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value, method: 'local' });
            if (user) {
                return Promise.reject('Email sudah terdaftar.');
            }
        }),

    check('password')
        .isLength({ min: 8 }).withMessage('Password minimal 8 karakter.'),

    check('konfirmasiPassword')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Konfirmasi password tidak cocok dengan password.');
            }
            return true;
        })
];
