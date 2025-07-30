import React from 'react';
import { useAuth } from '../hooks/authHooks';
import './Sidebar.css';
import {
    FiHome,
    FiBookmark,
    FiBarChart2,
    FiFileText,
    FiTarget,
    FiRadio,
    FiTrendingUp,
    FiX
} from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
    const { logout } = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        if (onClose) onClose();
    };

    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <span className="logo-icon">N</span>
                        <span className="logo-text">NovaNews</span>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <FiX />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        <li className="nav-item active">
                            <a href="#" className="nav-link">
                                <FiHome className="nav-icon" />
                                <span>Dasbor</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FiBookmark className="nav-icon" />
                                <span>Artikel Tersimpan</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FiBarChart2 className="nav-icon" />
                                <span>Insight</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FiFileText className="nav-icon" />
                                <span>Whitepaper</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FiTarget className="nav-icon" />
                                <span>Riset</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FiRadio className="nav-icon" />
                                <span>Survei</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="sidebar-section">
                    <div className="section-title">
                        <FiTrendingUp className="section-icon" />
                        <span>Live Market</span>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="logout-btn">
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
