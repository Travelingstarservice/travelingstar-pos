#!/bin/bash

# ------------------------------
# Traveling Star POS Auto Deploy
# ------------------------------

# 1️⃣ Serve locally for testing
echo "Serving local site for testing..."
cd frontend
npx serve . -l 0 &
SERVER_PID=$!
sleep 2

# Open local payment page in default browser
if which open > /dev/null; then
  open http://localhost:5000/payment.html
fi

# Wait for user confirmation to continue deployment
read -p "Check the local site. Press Enter to continue deployment to GitHub & Render..."

# 2️⃣ Stop local server
kill $SERVER_PID 2>/dev/null

# 3️⃣ Push changes to GitHub
echo "Pushing changes to GitHub..."
cd ..
git add frontend
git commit -m "Update POS frontend"
git push origin main

# 4️⃣ Open live Render site
LIVE_URL="https://travelingstar-pos-frontend.onrender.com/payment.html"
echo "Render will auto-deploy the site. Opening live site shortly..."
sleep 5  # wait a few seconds for Render to start deploying
if which open > /dev/null; then
  open $LIVE_URL
fi

echo "Done! Your POS should now be live at: $LIVE_URL"

