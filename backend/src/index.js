// 1. Muat variabel lingkungan dari file .env
require('dotenv').config();

// 2. Impor dependensi inti
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport')

require('./config/passport');

// 3. Buat aplikasi Express
const app = express();

app.use(cors({
  // Hanya izinkan permintaan dari URL frontend
    origin: process.env.FRONTEND_URL
}));

// 4. Gunakan middleware untuk mem-parsing JSON
app.use(express.json());

app.use(passport.initialize());

// --- Koneksi ke Database MongoDB ---
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('FATAL ERROR: MONGODB_URI tidak terdefinisi di file .env.');
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully.');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// --- API Routes (Akan ditambahkan nanti) ---
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Buat "Health Check" route untuk memastikan server berjalan
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'NOVA Backend service is running successfully.'
  });
});


// --- Background Services (Akan ditambahkan nanti) ---
// require('./services/rssService');


// --- Jalankan Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
