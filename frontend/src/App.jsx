import React, { useState } from 'react';
import AuthModal from './components/AuthModal'; // Akan kita impor setelah dibuat

function App() {
  // State untuk mengontrol apakah modal terlihat atau tidak
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State untuk menentukan jenis modal ('login' atau 'register')
  const [modalType, setModalType] = useState('login');

  // Fungsi untuk membuka modal dengan jenis yang ditentukan
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome to NOVA</h1>
        <nav>
          <button onClick={() => openModal('login')}>Masuk</button>
          <button onClick={() => openModal('register')}>Daftar</button>
        </nav>
      </header>
      <main>
        <p>Your dashboard content will be here.</p>
      </main>

      {/* Modal akan ditampilkan hanya jika isModalOpen bernilai true */}
      {isModalOpen && <AuthModal type={modalType} onClose={closeModal} />}
    </div>
  );
}

export default App;
