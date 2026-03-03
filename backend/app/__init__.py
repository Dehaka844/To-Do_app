# backend/app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Creamos la instancia de la BD sin asociarla a la app todavía
db = SQLAlchemy()

def create_app():
    """Fábrica de la aplicación Flask."""
    app = Flask(__name__)
    
    # Habilitamos CORS para permitir peticiones desde nuestro frontend
    CORS(app)

    # --- Configuración ---
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # --- Inicialización de Extensiones ---
    db.init_app(app)

    # --- Registro de Blueprints (Rutas) ---
    from .routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    # --- Creación de la Base de Datos ---
    with app.app_context():
        db.create_all()

    return app
