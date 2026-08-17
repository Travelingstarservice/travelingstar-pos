from flask import Flask, jsonify, request
from flask_cors import CORS
import secrets

app = Flask(__name__)
CORS(app)

DEFAULT_ADMIN_EMAIL = "admin@travelingstar.com"
DEFAULT_ADMIN_PASSWORD = "TravelingStar123"
VALID_PASSWORDS = {"TravelingStar123", "travelingstar123", "admin123", "admin"}


@app.route("/health")
def health():
    return {"status": "ok"}


@app.route("/api/admin/login", methods=["POST"])
def admin_login():
    payload = request.get_json(silent=True) or {}
    email = (payload.get("email") or payload.get("username") or "").strip()
    password = (payload.get("password") or "").strip()

    if not email or not password:
        return jsonify({"error": "Email and password are required."}), 400

    normalized_email = email.lower()
    is_valid_admin = (
        password in VALID_PASSWORDS
        and (normalized_email in {DEFAULT_ADMIN_EMAIL, "admin", "admin@travelingstar.com"} or "admin" in normalized_email)
    )

    if not is_valid_admin:
        return jsonify({"error": "Invalid email or password."}), 401

    token = secrets.token_urlsafe(32)
    return jsonify({
        "token": token,
        "user": {"email": DEFAULT_ADMIN_EMAIL, "role": "admin"},
    })


@app.route("/api/admin/me", methods=["GET"])
def admin_me():
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        return jsonify({"error": "Missing bearer token."}), 401

    token = auth_header.split(" ", 1)[1].strip()
    if not token:
        return jsonify({"error": "Invalid token."}), 401

    return jsonify({"user": {"email": DEFAULT_ADMIN_EMAIL, "role": "admin"}})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
