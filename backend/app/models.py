# backend/app/models.py
from . import db

class Task(db.Model):
    """Modelo de datos para la tabla 'task'."""
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    completed = db.Column(db.Boolean, default=False, nullable=False)

    def to_dict(self):
        """Convierte el objeto Task a un diccionario para serializar a JSON."""
        return {
            'id': self.id,
            'title': self.title,
            'completed': self.completed
        }
