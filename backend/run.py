# backend/run.py
from app import create_app

app = create_app()

if __name__ == '__main__':
    # debug=True para desarrollo
    # host='0.0.0.0' permite acceder desde fuera del contenedor si usas Docker
    app.run(debug=True, port=5000)
