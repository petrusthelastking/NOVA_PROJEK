# 🚀 NOVA: News Impact Analysis Platform

Selamat datang di **NOVA**! Platform ini menganalisis dampak berita dari RSS feed terhadap pergerakan aset finansial menggunakan LLM.

Kontribusi Anda sangat kami hargai! Panduan ini akan membantu Anda menyiapkan proyek secara lokal, khususnya untuk pengguna **Windows**.

---
## 📋 Prasyarat

Sebelum memulai, pastikan perangkat Anda sudah terinstal:
* **Git** (versi 2.30+)
* **Docker Desktop** (untuk menjalankan semua layanan dalam kontainer)
* **PowerShell 7+** (disarankan untuk kompatibilitas terbaik)

---
## 🏗️ Menjalankan Proyek Secara Lokal (Windows & PowerShell)

Ikuti langkah-langkah ini di terminal **PowerShell**.

### 1. Clone Repositori
```powershell
git clone [https://github.com/petrusthelastking/NOVA_PROJEK.git](https://github.com/petrusthelastking/NOVA_PROJEK.git)
cd NOVA_PROJEK
```

### 2. Konfigurasi Variabel Lingkungan
File `.env` berisi kunci API dan konfigurasi rahasia lainnya, sehingga tidak disimpan di Git. Salin file contoh yang tersedia untuk membuat file konfigurasi lokal Anda.
```powershell
# Salin untuk Backend
Copy-Item -Path backend/.env.example -Destination backend/.env

# Salin untuk ML Service
Copy-Item -Path ml-service/.env.example -Destination ml-service/.env

# Salin untuk Frontend
Copy-Item -Path frontend/.env.example -Destination frontend/.env
```
Setelah itu, buka setiap file `.env` yang baru dibuat dan isi nilainya sesuai kebutuhan.

### 3. Bangun & Jalankan Semua Layanan
Perintah ini akan membangun *image* Docker dan menjalankan semua kontainer dalam mode *development* (dengan *live-reload*).
```powershell
docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build
```

### 4. Verifikasi Layanan Berjalan
Setelah semua kontainer berjalan, Anda dapat mengakses layanan melalui URL berikut:
* **Frontend**: `http://localhost:5173`
* **Backend API**: `http://localhost:5000/api/news` (contoh endpoint)
* **ML Service Docs**: `http://localhost:8000/docs`

Selamat! Lingkungan pengembangan Anda telah siap.

---
## ⚙️ Perintah Berguna (Windows & PowerShell)

* **Menghentikan semua layanan**:
    ```powershell
    docker-compose down
    ```
* **Melihat log dari layanan tertentu** (ganti `backend` dengan nama layanan lain):
    ```powershell
    docker-compose logs -f backend
    ```
* **Membersihkan total** (menghapus kontainer & volume data, **termasuk database lokal**):
    ```powershell
    docker-compose down -v
    ```
> **Untuk Pengguna Linux/macOS/WSL**: Proyek ini juga menyertakan `Makefile`. Anda dapat menggunakan perintah yang lebih singkat seperti `make dev`, `make down`, dll.

---
## 🎯 Berkontribusi
1.  *Fork* repositori ini.
2.  Buat *branch* baru: `git checkout -b feat/your-feature`
3.  Implementasikan perubahan Anda.
4.  Buat *commit* dengan pesan yang jelas: `git commit -m "feat: jelaskan fitur anda"`
5.  *Push branch* Anda: `git push origin feat/your-feature`
6.  Buka *Pull Request* dan berikan deskripsi detail tentang perubahan Anda.
