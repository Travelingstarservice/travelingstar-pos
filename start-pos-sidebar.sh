#!/bin/bash
# ------------------------------
# Traveling Star POS Sidebar
# ------------------------------

# Start a new tmux session named "pos"
tmux new-session -d -s pos

# Split the window vertically
tmux split-window -h

# Left pane: main Terminal (just stay at shell)
tmux select-pane -L

# Right pane: show the commands cheat sheet
tmux send-keys -R "cat ~/Documents/GitHub/travelingstar-pos/commands.txt" C-m

# Attach to the session
tmux attach -t pos

