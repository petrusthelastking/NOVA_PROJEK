.PHONY: up dev down logs clean

# Jalankan environment production-like
up:
    docker-compose up -d --build

# Jalankan environment development dengan live-reload
dev:
    docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build

# Hentikan semua service
down:
    docker-compose down

# Lihat log dari service tertentu (e.g., make logs service=backend)
logs:
    docker-compose logs -f $(service)

# Hapus semua container dan volume (PERHATIKAN: Data DB akan hilang!)
clean:
    docker-compose down -v --remove-orphans
