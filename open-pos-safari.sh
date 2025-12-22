#!/bin/bash
# ------------------------------------
# Open Traveling Star POS live pages safely in Safari
# ------------------------------------

PAYMENT_URL="https://travelingstar-pos-frontend.onrender.com/payment.html"
ADMIN_URL="https://travelingstar-pos-frontend.onrender.com/admin.html"

osascript <<EOD
tell application "Safari"
    activate
    if (count of windows) = 0 then
        make new document
    end if
    tell window 1
        set current tab to (make new tab with properties {URL:"$PAYMENT_URL"})
        set current tab to (make new tab with properties {URL:"$ADMIN_URL"})
    end tell
end tell
EOD

echo "Opened live Traveling Star POS pages in Safari."

