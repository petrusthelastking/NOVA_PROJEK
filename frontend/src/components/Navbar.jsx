import React from 'react';
import './Navbar.css';
import { FiSearch, FiMenu, FiChevronDown } from 'react-icons/fi';

const Navbar = ({ openModal, onMenuClick, user }) => {
    // Ambil inisial dari email jika username tidak ada
    const getInitial = () => {
        if (user?.username) return user.username.charAt(0).toUpperCase();
        if (user?.email) return user.email.charAt(0).toUpperCase();
        return 'P';
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                {user && (
                    <button className="mobile-menu-btn" onClick={onMenuClick}>
                        <FiMenu />
                    </button>
                )}
                <nav className="nav-tabs">
                    <a href="#" className="nav-tab active">Terkini</a>
                    <a href="#" className="nav-tab">Kripto</a>
                    <a href="#" className="nav-tab">Komoditas</a>
                    <a href="#" className="nav-tab">Indikator Ekonomi</a>
                    <a href="#" className="nav-tab">Perusahaan</a>
                </nav>
            </div>

            <div className="navbar-center">
                {user && (
                    <div className="search-container">
                        <div className="search-bar">
                            <FiSearch className="search-icon" />
                            <input type="text" placeholder="Cari berita..." />
                            <span className="search-shortcut">Ctrl K</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="navbar-right">
                {user ? (
                    <div className="user-section">
                        <div className="time-display">
                            20:20 <span className="timezone">WIB</span>
                            <div className="market-status">PASAR TUTUP</div>
                        </div>
                        <div className="user-profile">
                            <span className="greeting">Halo, {user.username || 'Petrus'}</span>
                            <div className="profile-menu">
                                <div className="profile-avatar">{getInitial()}</div>
                                <FiChevronDown className="dropdown-icon" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="auth-buttons">
                        <button onClick={() => openModal('login')} className="btn-signin">
                            Masuk
                        </button>
                        <button onClick={() => openModal('register')} className="btn-signup">
                            Daftar
                        </button>
                    </div>
                )}
            </div>

            {user && (
                <div className="trending-tags">
                    <div className="trending-label">TOPIK HANGAT</div>
                    <div className="trending-items">
                        <span className="trending-tag investing">INVESTING.COM</span>
                        <span className="trending-tag reuters">REUTERS</span>
                        <span className="trending-tag bitcoin">BITCOIN</span>
                        <span className="trending-tag trump">TRUMP</span>
                        <span className="trending-tag crypto">CRYPTO</span>
                        <span className="trending-tag slides">SLIDES</span>
                        <span className="trending-tag trade">TRADE</span>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
