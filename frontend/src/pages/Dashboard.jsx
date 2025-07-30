import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import NewsGrid from '../components/NewsGrid';
import StatsHeader from '../components/StatsHeader';
import { useAuth } from '../hooks/authHooks';
import './Dashboard.css';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('login');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user } = useAuth();

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`app-layout ${user ? 'logged-in' : 'logged-out'}`}>
            {user && (
                <>
                    <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                    {isSidebarOpen && <div className="sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />}
                </>
            )}

            <div className="main-container">
                <Navbar
                    user={user}
                    openModal={openModal}
                    onMenuClick={toggleSidebar}
                />

                <main className="content-area">
                    <div className="dashboard-content">
                            <StatsHeader />
                            <div className="dashboard-grid">
                                <div className="main-content">
                                    <div className="section-header">
                                        <h2>Untuk Anda</h2>
                                        <a href="#" className="view-all-link">Lihat Semua →</a>
                                    </div>
                                    <NewsGrid />
                                </div>
                                <div className="sidebar-content">
                                    <div className="analysis-section">
                                        <h3>ANALISIS TERFOKUS</h3>
                                        <div className="analysis-items">
                                            <div className="analysis-item">
                                                <div className="item-source">Bitcoin</div>
                                                <p>Kesulitan penambangan Bitcoin naik sebesar 1,07% menjadi 127,62 triliun, menjadikannya sebagai yang tertinggi sepanjang...</p>
                                            </div>
                                            <div className="analysis-item">
                                                <div className="item-source">Reuters</div>
                                                <p>Trump, EU's von der Leyen to meet on Sunday to clinch trade deal, avert trade war By Reuters</p>
                                            </div>
                                            <div className="analysis-item">
                                                <div className="item-source">Investing.com</div>
                                                <p>Will China loosen its grip on critical mineral exports? By Investing.com</p>
                                            </div>
                                            <div className="analysis-item">
                                                <div className="item-source">Investing.com</div>
                                                <p>Street Calls of the Week By Investing.com</p>
                                            </div>
                                            <div className="analysis-item">
                                                <div className="item-source">Matzov</div>
                                                <p>Amazon's Kuiper poised to challenge Starlink's satellite broadband crown: Barclays By...</p>
                                            </div>
                                            <div className="analysis-item">
                                                <div className="item-source">AWS</div>
                                                <p>5 big analyst AI moves: Amazon PT hike, Apple lagging in GenAI race By Investing.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </main>
            </div>

            {isModalOpen && <AuthModal initialType={modalType} onClose={closeModal} />}
        </div>
    );
};

export default Dashboard;
