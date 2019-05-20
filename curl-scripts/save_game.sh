curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "id":12262,
      "cells": ["", "", "", "x", "x", "", "", "x", "o"]
    }
}'

echo
