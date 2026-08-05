from flask import Blueprint, jsonify
from config import Config

info_bp = Blueprint("info", __name__)


@info_bp.route("/")
def home():
    return jsonify({
        "application": Config.APP_NAME,
        "developer": Config.DEVELOPER,
        "version": Config.VERSION,
        "environment": Config.ENVIRONMENT,
        "status": "Running"
    })


@info_bp.route("/info")
def info():
    return jsonify({
        "project": Config.APP_NAME,
        "developer": Config.DEVELOPER,
        "technology": [
            "Flask",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Jenkins",
            "Helm",
            "Argo CD",
            "AWS"
        ]
    })
