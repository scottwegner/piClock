#!/bin/bash

export DISPLAY=":0"
DISPLAY=:0
while true; do
   xdotool keydown Shift+ctrl+r; xdotool keyup Shift+ctrl+r;
   sleep 3600
done
