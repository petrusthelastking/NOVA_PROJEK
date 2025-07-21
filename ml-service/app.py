from fastapi import FastAPI

# Inisialisasi aplikasi FastAPI
app = FastAPI(title="NOVA ML Service")


# "Health Check" endpoint untuk memastikan service berjalan
@app.get("/", tags=["Health Check"])
def read_root():
    """
    Endpoint dasar untuk memeriksa apakah layanan sedang berjalan.
    """
    return {
        "status": "OK",
        "message": "NOVA ML Service is running."
    }


# --- Endpoint untuk fitur akan ditambahkan di sini nanti ---
#
# class Input(BaseModel):
#     text: str
#
# @app.post("/analyze", tags=["Analysis"])
# def analyze(payload: Input):
#     # Logika untuk analisis teks akan ditambahkan di sini
#     return {"score": 0, "assets": []}
