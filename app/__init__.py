from flask import Flask, render_template
from .blueprints import register_blueprints
import os

def create_app():
    app = Flask(__name__)

    app.secret_key = os.environ.get('SECRET_KEY', 'FALLBACK_SECRET_KEY')

    # Register blueprints from blueprints.py
    register_blueprints(app)

    # Define error handling
    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('404.html'), 404

    return app

    