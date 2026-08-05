import os


class Config:
    APP_NAME = "Jai Enterprise Platform"
    DEVELOPER = "Jai Bardiya"
    VERSION = "1.0.0"

    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_PORT = os.getenv("DB_PORT", "3306")
    DB_NAME = os.getenv("DB_NAME", "enterprise_db")
    DB_USER = os.getenv("MYSQL_USER", "enterprise_user")
    DB_PASSWORD = os.getenv("MYSQL_PASSWORD", "enterprise123")

    ENVIRONMENT = os.getenv("APP_ENV", "development")
