#!/bin/bash
# ------------------------------------
# Open Traveling Star POS live pages in default browser (works on macOS)
# ------------------------------------

# Live URLs on Render
PAYMENT_URL="https://travelingstar-pos-frontend.onrender.com/payment.html"
ADMIN_URL="https://travelingstar-pos-frontend.onrender.com/admin.html"

# Open in default browser
open "$PAYMENT_URL"
open "$ADMIN_URL"

echo "Opened live Traveling Star POS pages in your default browser."

