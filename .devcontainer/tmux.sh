#!/bin/bash
tmux new-session -d -s setup './.devcontainer/setup.sh && echo "Complete! Exiting in 1 minute..." && sleep 60'
