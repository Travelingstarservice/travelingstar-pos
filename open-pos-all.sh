#!/bin/bash
# --------------------------------------------
# Open Traveling Star POS: Local + Live Pages in Safari
# --------------------------------------------

# Local development URLs
LOCAL_PAYMENT="http://localhost:5000/payment.html"
LOCAL_ADMIN="http://localhost:5000/admin.html"

# Live Render URLs
LIVE_PAYMENT="https://travelingstar-pos-frontend.onrender.com/payment.html"
LIVE_ADMIN="https://travelingstar-pos-frontend.onrender.com/admin.html"

# Launch Safari if not running
open -a Safari
sleep 1  # Give Safari time to start

# Use AppleScript to open tabs safely
osascript <<EOD
tell application "Safari"
    activate
    # Open Local pages
    tell window 1
        make new tab with properties {URL:"$LOCAL_PAYMENT"}
        make new tab with properties {URL:"$LOCAL_ADMIN"}
    end tell
    # Open Live pages
    tell window 1
        make new tab with properties {URL:"$LIVE_PAYMENT"}
        make new tab with properties {URL:"$LIVE_ADMIN"}
    end tell
end tell
EOD

echo "Opened all Traveling Star POS pages in Safari (Local + Live)."

