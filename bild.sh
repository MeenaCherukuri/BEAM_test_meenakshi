#!/usr/bin/env bash

echo "Installing Dependencies ..."
pip install -r requirements.txt

echo "Collecting Static Files ..."
python BEAM_project/manage.py collectstatic --noinput