from flask import Blueprint, jsonify
from services.system_service import get_system_metrics

system_bp = Blueprint("system", __name__)


@system_bp.route("/system")
def system():
    return jsonify(get_system_metrics())
