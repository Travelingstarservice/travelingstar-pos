#!/bin/bash
# ======================================
# Traveling Star POS Terminal Dashboard (Fixed)
# ======================================

LOCAL_POS_PATH=~/Documents/GitHub/travelingstar-pos/frontend
LIVE_URL="https://travelingstar-pos-frontend.onrender.com"
STATUS_MSG="Welcome to Traveling Star POS Dashboard"

print_status() {
    echo "------------------------------"
    echo "$1"
    echo "------------------------------"
}

launch_local_pos() {
    print_status "Launching Local Traveling Star POS..."
    cd "$LOCAL_POS_PATH" || { print_status "Frontend folder not found!"; return; }
    # Serve static site in background, pick free port
    PORT=$(npx serve . -l 0 | grep "Local:" | awk '{print $2}' | sed 's|http://||')
    # Open in browser via Python (macOS-safe)
    python3 -m webbrowser "http://$PORT"
    print_status "Local POS running at http://$PORT"
}

launch_live_pos() {
    print_status "Opening Live Traveling Star POS..."
    python3 -m webbrowser "$LIVE_URL"
    print_status "Live POS opened: $LIVE_URL"
}

while true; do
    clear
    echo "=== Traveling Star POS Dashboard ==="
    echo "1) Open Local POS"
    echo "2) Open Live POS"
    echo "3) Exit"
    print_status "$STATUS_MSG"
    read -p "Select option [1-3]: " choice

    case $choice in
        1) launch_local_pos; read -p "Press Enter to return to menu..." ;;
        2) launch_live_pos; read -p "Press Enter to return to menu..." ;;
        3) echo "Exiting..."; break ;;
        *) STATUS_MSG="Invalid option";;
    esac
done
