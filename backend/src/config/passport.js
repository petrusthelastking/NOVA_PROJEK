const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

// helper untuk membuat username unik
const generateUniqueUsername = async (displayName) => {
    const baseUsername = displayName.replace(/\s+/g, '').toLowerCase();
    let username = baseUsername;
    let counter = 1;
    // cari username baru sampai menemukan yang belum ada di database
    while (await User.findOne({ username })) {
        username = `${baseUsername}${counter}`;
        counter++;
    }
    return username;
};

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
            return done(null, user);
        }

        const username = await generateUniqueUsername(profile.displayName);

        user = new User({
            method: 'google',
            googleId: profile.id,
            email: profile.emails[0].value,
            username: username, 
        });
        await user.save();
        return done(null, user);

    } catch (error) {
        return done(error, false);
    }
}));
