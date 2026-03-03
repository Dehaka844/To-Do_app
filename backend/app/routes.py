# backend/app/routes.py
from flask import Blueprint, request, jsonify
from .models import Task
from . import db

api_bp = Blueprint('api', __name__)

# --- Endpoint para OBTENER todas las tareas y CREAR una nueva ---
@api_bp.route('/tasks', methods=['GET', 'POST'])
def handle_tasks():
    if request.method == 'GET':
        tasks = Task.query.order_by(Task.id).all()
        return jsonify([task.to_dict() for task in tasks]), 200

    if request.method == 'POST':
        data = request.get_json()
        if not data or not 'title' in data or data['title'].strip() == '':
            return jsonify({'error': 'El título es obligatorio'}), 400
        
        new_task = Task(title=data['title'])
        db.session.add(new_task)
        db.session.commit()
        return jsonify(new_task.to_dict()), 201

# --- Endpoint para ACTUALIZAR y BORRAR una tarea específica ---
@api_bp.route('/tasks/<int:task_id>', methods=['PUT', 'DELETE'])
def handle_task(task_id):
    task = Task.query.get_or_404(task_id)

    if request.method == 'PUT':
        data = request.get_json()
        # Solo permitimos actualizar el estado 'completed'
        if 'completed' in data and isinstance(data['completed'], bool):
            task.completed = data['completed']
            db.session.commit()
            return jsonify(task.to_dict()), 200
        return jsonify({'error': 'Dato inválido para actualizar'}), 400

    if request.method == 'DELETE':
        db.session.delete(task)
        db.session.commit()
        return '', 204
