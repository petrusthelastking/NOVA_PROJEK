import React from 'react';
import './StatsHeader.css';

const StatsHeader = () => {
    return (
        <div className="stats-header">
            <div className="stat-item">
                <div className="stat-label">TOTAL ARTIKEL</div>
                <div className="stat-value">136</div>
            </div>
            <div className="stat-item">
                <div className="stat-label">FOKUS ANALISIS</div>
                <div className="stat-value">136</div>
            </div>
            <div className="stat-item">
                <div className="stat-label">KATEGORI AKTIF</div>
                <div className="stat-value">5</div>
            </div>
            <div className="stat-item">
                <div className="stat-label">SUMBER BERITA</div>
                <div className="stat-value">13</div>
            </div>
        </div>
    );
};

export default StatsHeader;
