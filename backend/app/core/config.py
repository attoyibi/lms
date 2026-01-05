from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "LMS API"
    API_V1_STR: str = "/api/v1"
    # Menggunakan SQLite agar mudah dijalankan tanpa setup database server tambahan setup awal
    DATABASE_URL: str = "sqlite:///./lms.db"

    class Config:
        env_file = ".env"

settings = Settings()
