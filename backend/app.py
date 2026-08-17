import os
import secrets

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

_admin_tokens = set()


@app.route("/health")
def health():
    return {"status": "ok"}


@app.post("/api/admin/login")
def admin_login():
    payload = request.get_json(silent=True) or {}
    username = str(payload.get("username") or payload.get("email") or "").strip()
    password = str(payload.get("password") or "")
    configured_username = os.environ.get("ADMIN_USERNAME", "admin")
    configured_password = os.environ.get("ADMIN_PASSWORD")

    if not configured_password:
        return jsonify(error="Admin authentication is not configured"), 503

    valid_username = secrets.compare_digest(username, configured_username)
    valid_password = secrets.compare_digest(password, configured_password)
    if not valid_username or not valid_password:
        return jsonify(error="Invalid admin credentials"), 401

    token = secrets.token_urlsafe(32)
    _admin_tokens.add(token)
    return jsonify(token=token)


@app.get("/api/admin/dashboard")
def admin_dashboard():
    authorization = request.headers.get("Authorization", "")
    token = authorization.removeprefix("Bearer ").strip()
    if not token or token not in _admin_tokens:
        return jsonify(error="Unauthorized"), 401

    return jsonify(status="ok")
