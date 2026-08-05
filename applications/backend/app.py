from flask import Flask
from flask_cors import CORS

from routes.health import health_bp
from routes.info import info_bp
from routes.system import system_bp
from routes.database import database_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(health_bp)
app.register_blueprint(info_bp)
app.register_blueprint(system_bp)
app.register_blueprint(database_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
