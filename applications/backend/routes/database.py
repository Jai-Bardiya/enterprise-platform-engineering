from flask import Blueprint, jsonify
import mysql.connector
from config import Config

database_bp = Blueprint("database", __name__)


@database_bp.route("/database")
def database():

    try:

        connection = mysql.connector.connect(
            host=Config.DB_HOST,
            user=Config.DB_USER,
            password=Config.DB_PASSWORD,
            database=Config.DB_NAME,
            port=Config.DB_PORT
        )

        connection.close()

        return jsonify({
            "status": "Connected"
        })

    except Exception as e:

        return jsonify({
            "status": "Disconnected",
            "error": str(e)
        }), 500
