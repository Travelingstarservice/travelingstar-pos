from flask import Flask, jsonify, request
from flask_cors import CORS
import hmac
import os
import sys

from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadSignature

# Fail fast at startup if required environment variables are absent.
_admin_password = os.environ.get("ADMIN_PASSWORD")
if not _admin_password:
    print("ERROR: ADMIN_PASSWORD environment variable must be set", file=sys.stderr)
    sys.exit(1)

_secret_key = os.environ.get("SECRET_KEY")
if not _secret_key:
    print("ERROR: SECRET_KEY environment variable must be set", file=sys.stderr)
    sys.exit(1)

ADMIN_USERNAME: str = os.environ.get("ADMIN_USERNAME", "admin")
ADMIN_PASSWORD: str = _admin_password

# Stateless signed tokens expire after TOKEN_MAX_AGE_SECONDS (default 1 hour).
TOKEN_MAX_AGE = int(os.environ.get("TOKEN_MAX_AGE_SECONDS", "3600"))
_serializer = URLSafeTimedSerializer(_secret_key)

# Restrict CORS to the configured frontend origin only.
_frontend_origin = os.environ.get("FRONTEND_ORIGIN", "http://localhost:5173")

app = Flask(__name__)
CORS(app, origins=[_frontend_origin])


@app.route("/health")
def health():
    return {"status": "ok"}


@app.post("/api/admin/login")
def admin_login():
    payload = request.get_json(silent=True) or {}
    username = payload.get("username", "")
    password = payload.get("password", "")

    # Use constant-time comparison to prevent timing attacks.
    username_ok = hmac.compare_digest(username, ADMIN_USERNAME)
    password_ok = hmac.compare_digest(password, ADMIN_PASSWORD)

    if not (username_ok and password_ok):
        return jsonify({"error": "Invalid username or password"}), 401

    # Issue a stateless signed token — no server-side storage required.
    token = _serializer.dumps(username, salt="admin-token")
    return jsonify({"token": token})


@app.get("/api/admin/me")
def admin_me():
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        return jsonify({"error": "Missing bearer token"}), 401

    token = auth_header.removeprefix("Bearer ").strip()
    try:
        username = _serializer.loads(token, salt="admin-token", max_age=TOKEN_MAX_AGE)
    except SignatureExpired:
        return jsonify({"error": "Token has expired"}), 401
    except BadSignature:
        return jsonify({"error": "Invalid token"}), 401

    return jsonify({"username": username})
