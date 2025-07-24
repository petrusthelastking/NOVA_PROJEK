const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    method: {
        type: String,
        enum: ['local', 'google'],
        required: true
    },
    username: {
        type: String,
        required: [function() { return this.method === 'local'; }, 'Username is required.'],
        unique: true,
        sparse: true // Memungkinkan nilai null menjadi unik
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [function() { return this.method === 'local'; }, 'Password is required.'],
        select: false // Password tidak akan ikut terambil secara default
    },
    googleId: {
        type: String
    }
}, { timestamps: true });

// Hash password sebelum disimpan untuk user 'local'
UserSchema.pre('save', async function(next) {
    try {
        if (this.method !== 'local') {
            return next();
        }
        if (!this.isModified('password')) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', UserSchema);
