import React from 'react';
import './AuthModal.css';

const AuthModal = ({ type, onClose }) => {
    const isLogin = type === 'login';

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <div className="modal-content">
                    <div className="modal-info">
                        <div className="logo">⭐</div>
                        <h2>NovaNews</h2>
                        <p>Selamat datang kembali. Buka wawasan AI untuk berita Anda.</p>
                    </div>

                    <div className="modal-form">
                        <h3>{isLogin ? 'Masuk' : 'Daftar'}</h3>
                        <p>untuk mengakses analisis AI Anda.</p>

                        <form>
                            { !isLogin && <input type="text" placeholder="Username" required /> }
                            <input type="email" placeholder="anda@email.com" required />
                            <input type="password" placeholder="Kata Sandi" required />
                            { !isLogin && <input type="password" placeholder="Konfirmasi Kata Sandi" required /> }

                            { isLogin && <a href="#" className="forgot-password">Lupa kata sandi?</a> }

                            <button type="submit">{isLogin ? 'Masuk' : 'Daftar'}</button>
                        </form>

                        <p className="switch-auth">
                            {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
                            <a href="#"> {isLogin ? 'Daftar di sini' : 'Masuk di sini'}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
