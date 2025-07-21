# 🚀 NOVA: News Impact Analysis Platform

Welcome to **NOVA**! This platform analyzes the impact of news from RSS feeds on financial asset movements using LLMs.

We truly appreciate your contribution! This guide will help you set up the project locally, specifically tailored for **Windows** users.

---

## 📋 Prerequisites

Before getting started, make sure your system has the following installed:

* **Git** (version 2.30+)
* **Docker Desktop** (to run all services in containers)
* **PowerShell 7+** (recommended for best compatibility)

---

## 🏗️ Running the Project Locally (Windows & PowerShell)

Follow these steps in the **PowerShell** terminal.

### 1. Clone the Repository

```powershell
git clone https://github.com/petrusthelastking/NOVA_PROJEK.git
cd NOVA_PROJEK
```

### 2. Configure Environment Variables

The `.env` files contain API keys and other sensitive configuration values and are therefore not committed to Git. Copy the provided example files to create your own local configuration:

```powershell
# Copy for Backend
Copy-Item -Path backend/.env.example -Destination backend/.env

# Copy for ML Service
Copy-Item -Path ml-service/.env.example -Destination ml-service/.env

# Copy for Frontend
Copy-Item -Path frontend/.env.example -Destination frontend/.env
```

After that, open each newly created `.env` file and fill in the required values accordingly.

### 3. Build & Run All Services

This command builds Docker images and starts all containers in *development mode* with *live-reload*:

```powershell
docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build
```

### 4. Verify Services are Running

Once all containers are running, access the services through the following URLs:

* **Frontend**: `http://localhost:5173`
* **Backend API**: `http://localhost:5100` 
* **ML Service Docs**: `http://localhost:8100`

Congratulations! Your development environment is now ready.

---

## ⚙️ Useful Commands (Windows & PowerShell)

* **Stop all services**:

  ```powershell
  docker-compose down
  ```
* **View logs from a specific service** (replace `backend` with another service name):

  ```powershell
  docker-compose logs -f backend
  ```
* **Clean up everything** (removes containers & volumes, including **local database**):

  ```powershell
  docker-compose down -v
  ```

> **For Linux/macOS/WSL users**: This project also includes a `Makefile`. You can use shorter commands like `make dev`, `make down`, etc.

---

## 🌟 Contributing

1. *Fork* this repository.
2. Create a new *branch*: `git checkout -b feat/your-feature`
3. Implement your changes.
4. Make a *commit* with a clear message: `git commit -m "feat: describe your feature"`
5. *Push* your branch: `git push origin feat/your-feature`
6. Open a *Pull Request* and provide a detailed description of your changes.
