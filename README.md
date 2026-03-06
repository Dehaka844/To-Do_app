# Aplicación de Lista de Tareas (To-Do App) - Full-Stack

Este proyecto es una aplicación web completa de tipo "Single Page Application" (SPA) para gestionar una lista de tareas. Demuestra la integración de un backend desarrollado en Python con Flask y un frontend interactivo construido con HTML, CSS y JavaScript puro.

La aplicación permite a los usuarios añadir, ver, marcar como completadas y eliminar tareas, todo ello sin necesidad de recargar la página, gracias a la comunicación asíncrona con la API del backend.

## Características

*   **Backend RESTful:** Una API construida con Flask que gestiona la lógica de negocio y la persistencia de datos.
*   **Frontend Dinámico:** Una interfaz de usuario creada con JavaScript que consume la API para ofrecer una experiencia de usuario fluida.
*   **Operaciones CRUD completas:**
    *   **Crear:** Añadir nuevas tareas a la lista.
    *   **Leer:** Cargar y mostrar todas las tareas existentes.
    *   **Actualizar:** Marcar o desmarcar tareas como completadas.
    *   **Eliminar:** Borrar tareas de la lista.
*   **Persistencia de Datos:** Las tareas se guardan en una base de datos SQLite a través del ORM SQLAlchemy.

## Tecnologías Utilizadas

*   **Backend:**
    *   **Python 3**
    *   **Flask:** Microframework web para la API.
    *   **Flask-SQLAlchemy:** ORM para la interacción con la base de datos.
    *   **Flask-Cors:** Para permitir las peticiones desde el frontend.
*   **Frontend:**
    *   **HTML5**
    *   **CSS3** (estilos en línea para simplicidad)
    *   **JavaScript (ES6+):** Lógica del cliente, uso de `fetch` para peticiones a la API y manipulación del DOM.
*   **Base de Datos:**
    *   **SQLite**

## Cómo Ejecutar el Proyecto

Para ejecutar este proyecto, necesitas tener dos terminales abiertas: una para el backend y otra para el frontend.

**1. Prerrequisitos:**
   *   Tener Python 3.8 o superior y `pip` instalados.
   *   Un navegador web moderno.

**2. Configuración del Backend:**

   ```bash
   # 1. Clona el repositorio
   git clone https://github.com/tu-usuario/todo-app.git
   cd todo-app/backend

   # 2. (Recomendado ) Crea y activa un entorno virtual
   # En Windows:
   python -m venv venv
   venv\Scripts\activate
   # En macOS/Linux:
   python3 -m venv venv
   source venv/bin/activate

   # 3. Instala las dependencias de Python
   pip install -r requirements.txt

   # 4. Inicia el servidor de Flask
   python run.py
   ```
   El backend estará funcionando en `http://127.0.0.1:5000`.

**3. Ejecución del Frontend:**

   La forma más sencilla de ejecutar el frontend es abrir el archivo `index.html` directamente en tu navegador web.
   
   *   Navega a la carpeta `frontend` en tu explorador de archivos.
   *   Haz doble clic en `index.html`.

   La página se abrirá en tu navegador y comenzará a comunicarse con el backend que dejaste corriendo en la terminal.

---
*Desarrollado por [Tu Nombre].*
