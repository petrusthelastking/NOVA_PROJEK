import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../hooks/authHooks';
import { register } from '../services/authService';
import './AuthModal.css';

const AuthModal = ({ initialType = 'login', onClose }) => {
    // Ambil fungsi login dari AuthContext
    const { login } = useAuth();

    // State internal untuk mengontrol tampilan (login atau register)
    const [isLogin, setIsLogin] = useState(initialType === 'login');

    // State untuk menampung data dari form input
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        konfirmasiPassword: ''
    });

    // State untuk menampilkan pesan error
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Fungsi untuk meng-update state setiap kali ada ketikan di input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fungsi yang dipanggil saat form di-submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!isLogin) { // Logika untuk Registrasi
            if (formData.password !== formData.konfirmasiPassword) {
                setError('Konfirmasi password tidak cocok.');
                setIsLoading(false);
                return;
            }
            try {
                const data = await register(formData);
                login(data.token);
                onClose();
            } catch (err) {
                const errorMessage = err.response?.data?.errors?.[0]?.msg || 'Registrasi gagal. Coba lagi.';
                setError(errorMessage);
            }
        } else { // Logika untuk Login
            // TODO: Logika untuk login lokal akan ditambahkan di sini oleh teman Anda
            console.log("Login logic goes here");
        }
        setIsLoading(false);
    };

    // Fungsi untuk menangani klik tombol Google
    const handleGoogleRegister = () => {
        const popup = window.open('http://localhost:5100/api/auth/google', 'targetWindow', `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=620,height=700`);

        const messageListener = (event) => {
            if (event.origin !== 'http://localhost:5100') return;
            if (event.data.token) {
                login(event.data.token);
                onClose();
            }
            window.removeEventListener('message', messageListener);
        };
        window.addEventListener('message', messageListener);
    };

    // Fungsi untuk beralih antara mode login dan register
    const toggleAuthMode = (e) => {
        e.preventDefault(); // Mencegah link me-refresh halaman
        setIsLogin(!isLogin);
        setError(''); // Reset error saat beralih
        setFormData({ username: '', email: '', password: '', konfirmasiPassword: '' }); // Reset form
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-content">
                    <div className="modal-info">
                        <div className="logo">⭐</div>
                        <h2>NovaNews</h2>
                        <p>Selamat datang kembali. Buka wawasan AI untuk berita Anda.</p>
                    </div>

                    <div className="modal-form">
                        <h3>{isLogin ? 'Masuk ke Akun Anda' : 'Buat Akun Baru'}</h3>
                        <p>untuk mengakses analisis AI Anda.</p>

                        {error && <p className="error-message">{error}</p>}

                        <form onSubmit={handleSubmit}>
                            {!isLogin && (
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input id="username" name="username" type="text" required value={formData.username} onChange={handleChange} />
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Kata Sandi</label>
                                <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange} />
                            </div>
                            {!isLogin && (
                                <div className="form-group">
                                    <label htmlFor="konfirmasiPassword">Konfirmasi Kata Sandi</label>
                                    <input id="konfirmasiPassword" name="konfirmasiPassword" type="password" required value={formData.konfirmasiPassword} onChange={handleChange} />
                                </div>
                            )}

                            {isLogin && <a href="#" className="forgot-password">Lupa kata sandi?</a>}

                            <button type="submit" className="submit-btn" disabled={isLoading}>
                                {isLoading ? 'Memproses...' : (isLogin ? 'Masuk' : 'Buat Akun')}
                            </button>
                        </form>

                        <div className="divider">ATAU</div>

                        <button type="button" className="google-btn" onClick={handleGoogleRegister}>
                            <FcGoogle size={24} />
                            <span>{isLogin ? 'Masuk dengan Google' : 'Lanjutkan dengan Google'}</span>
                        </button>

                        <p className="switch-auth">
                            {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
                            <a href="#" onClick={toggleAuthMode}> {isLogin ? 'Daftar di sini' : 'Masuk di sini'}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
