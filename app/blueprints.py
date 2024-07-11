from flask import Blueprint, render_template, request, redirect, url_for, flash, session
import os

# Define the home blueprint
home_blueprint = Blueprint('home', __name__)

# Define reguster_blueprints function used in __init__.py
def register_blueprints(app):
    app.register_blueprint(home_blueprint)


### Routes
@home_blueprint.route('/')
def home():
    return render_template('index.html')