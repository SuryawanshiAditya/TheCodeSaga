#! /bin/bash

python3 fetch_from_spreadsheet.py

cd ../

git add .
git commit -m "update participant entries"
git push origin main
 