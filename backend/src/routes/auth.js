const router = require('express').Router();
const { registerValidation } = require('../validators/auth');
const authController = require('../controllers/authController');
const passport = require('passport');

router.post('/register', registerValidation, authController.registerLocal)


router.post('/login', (req, res) => {
    res.status(200).json({ message: "Login endpoint placeholder" });
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: '/login-failed' }),
    authController.socialLogin
);



module.exports = router;
