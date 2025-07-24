import React, { useState } from 'react';
import AuthModal from './components/AuthModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalType, setModalType] = useState('login');


  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

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

      {isModalOpen && <AuthModal type={modalType} onClose={closeModal} />}
    </div>
  );
}

export default App;
