from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import secrets

app = Flask(__name__)
cors_origins = [origin.strip() for origin in os.environ.get("CORS_ORIGINS", "").split(",") if origin.strip()]
CORS(app, resources={r"/api/*": {"origins": cors_origins or "http://localhost:5173"}})

ACTIVE_TOKENS: dict[str, str] = {}


@app.route("/health")
def health():
    return {"status": "ok"}


@app.post("/api/admin/login")
def admin_login():
    payload = request.get_json(silent=True) or {}
    username = payload.get("username", "")
    password = payload.get("password", "")
    expected_username = os.environ.get("ADMIN_USERNAME", "admin")
    expected_password = os.environ.get("ADMIN_PASSWORD", "travelingstar123")

    if username != expected_username or password != expected_password:
        return jsonify({"error": "Invalid username or password"}), 401

    token = secrets.token_urlsafe(32)
    ACTIVE_TOKENS[token] = username
    return jsonify({"token": token})


@app.get("/api/admin/me")
def admin_me():
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        return jsonify({"error": "Missing bearer token"}), 401

    token = auth_header.removeprefix("Bearer ").strip()
    username = ACTIVE_TOKENS.get(token)
    if not username:
        return jsonify({"error": "Invalid token"}), 401

    return jsonify({"username": username})
