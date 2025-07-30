import React from 'react';
import './NewsGrid.css';
import { FiBookmark, FiTrendingUp } from 'react-icons/fi';

const NewsGrid = () => {
    const newsData = [
        {
            id: 1,
            title: "Tingkat Kesulitan Mining Bitcoin Naik Sebesar 1,07% Menjadi 127,62 Triliun",
            source: "Terkini",
            time: "27 Jul",
            image: "/api/placeholder/300/200",
            type: "chart"
        },
        {
            id: 2,
            title: "Trump, EU's von der Leyen to meet on Sunday to clinch trade deal, avert trade war By Reuters",
            source: "Terkini",
            time: "27 Jul",
            image: "/api/placeholder/300/200",
            type: "news"
        },
        {
            id: 3,
            title: "Will China loosen its grip on critical mineral exports? By Investing.com",
            source: "Terkini",
            time: "27 Jul",
            image: "/api/placeholder/300/200",
            type: "analysis"
        },
        {
            id: 4,
            title: "AMD Stock Analysis: Strong Performance in Data Center Market",
            source: "Terkini",
            time: "27 Jul",
            image: "/api/placeholder/300/200",
            type: "stock"
        },
        {
            id: 5,
            title: "Amazon's Q3 Earnings Beat Expectations, Stock Surges 8%",
            source: "Terkini",
            time: "27 Jul",
            image: "/api/placeholder/300/200",
            type: "earnings"
        },
        {
            id: 6,
            title: "AWS Cloud Services Revenue Grows 32% Year-over-Year",
            source: "Terkini",
            time: "27 Jul",
            image: "/api/placeholder/300/200",
            type: "tech"
        }
    ];

    return (
        <div className="news-grid">
            {newsData.map((article, index) => (
                <div key={article.id} className={`news-card ${index === 0 ? 'featured' : ''}`}>
                    <div className="card-image">
                        <div className="image-placeholder">
                            {article.type === 'chart' && <FiTrendingUp className="placeholder-icon" />}
                            {article.type === 'news' && <div className="flag-placeholder">🇨🇳</div>}
                            {article.type === 'analysis' && <div className="text-placeholder">Analysis</div>}
                            {article.type === 'stock' && <div className="logo-placeholder">AMD</div>}
                            {article.type === 'earnings' && <div className="logo-placeholder">amazon</div>}
                            {article.type === 'tech' && <div className="logo-placeholder">AWS</div>}
                        </div>
                        <button className="bookmark-btn">
                            <FiBookmark />
                        </button>
                    </div>
                    <div className="card-content">
                        <div className="card-meta">
                            <span className="source">{article.source}</span>
                            <span className="time">{article.time}</span>
                        </div>
                        <h3 className="card-title">{article.title}</h3>
                        {index === 0 && (
                            <p className="card-excerpt">
                                Kesulitan penambangan Bitcoin naik sebesar 1,07% menjadi 127,62 triliun, menjadikannya sebagai yang tertinggi sepanjang...
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsGrid;
