// frontend/js/app.js

document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://127.0.0.1:5000/api/tasks';
    const taskForm = document.getElementById('task-form' );
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // --- 1. FUNCIÓN PARA OBTENER Y MOSTRAR LAS TAREAS ---
    async function fetchTasks() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('No se pudo conectar a la API');
            const tasks = await response.json();
            
            taskList.innerHTML = ''; // Limpiamos la lista antes de volver a dibujarla
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.className = 'task-item';
                li.dataset.id = task.id;
                if (task.completed) {
                    li.classList.add('completed');
                }

                const span = document.createElement('span');
                span.textContent = task.title;
                
                // Evento para marcar como completada
                span.addEventListener('click', () => toggleTaskCompletion(task.id, !task.completed));

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Eliminar';
                deleteBtn.className = 'delete-btn';
                deleteBtn.addEventListener('click', () => deleteTask(task.id));

                li.appendChild(span);
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
        } catch (error) {
            console.error('Error al obtener las tareas:', error);
            taskList.innerHTML = '<li>Error al cargar las tareas. Asegúrate de que el backend está funcionando.</li>';
        }
    }

    // --- 2. FUNCIÓN PARA AÑADIR UNA NUEVA TAREA ---
    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página
        const title = taskInput.value.trim();
        if (!title) return;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: title })
            });

            if (response.ok) {
                taskInput.value = ''; // Limpiamos el input
                fetchTasks(); // Volvemos a cargar la lista de tareas
            } else {
                console.error('Error al añadir la tarea');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    });

    // --- 3. FUNCIÓN PARA MARCAR/DESMARCAR UNA TAREA COMO COMPLETADA ---
    async function toggleTaskCompletion(taskId, newStatus) {
        try {
            const response = await fetch(`${apiUrl}/${taskId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: newStatus })
            });

            if (response.ok) {
                fetchTasks();
            } else {
                console.error('Error al actualizar la tarea');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    // --- 4. FUNCIÓN PARA ELIMINAR UNA TAREA ---
    async function deleteTask(taskId) {
        try {
            const response = await fetch(`${apiUrl}/${taskId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                fetchTasks();
            } else {
                console.error('Error al eliminar la tarea');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    // --- Carga inicial de las tareas al abrir la página ---
    fetchTasks();
});
