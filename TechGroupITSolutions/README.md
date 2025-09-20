# TechGroup IT Solutions

Sitio web corporativo para la empresa TechGroup IT Solutions. Este proyecto es una página web estática que presenta los servicios, información de la empresa y un formulario de inicio de sesión para clientes o empleados.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Uso](#instalación-y-uso)
- [Dependencias](#dependencias)
- [Detalles de cada archivo](#detalles-de-cada-archivo)
- [Notas de Seguridad](#notas-de-seguridad)
- [Contacto](#contacto)

## Descripción General
TechGroup IT Solutions es una empresa dedicada al desarrollo de software, infraestructura y consultoría IT. El sitio web tiene como objetivo presentar la empresa, sus servicios principales y permitir el acceso a un área privada mediante un formulario de login.

## Estructura del Proyecto
```
index.html              # Página principal (presentación y bienvenida)
servicios.html          # Página de servicios ofrecidos
login.html              # Página de inicio de sesión
css/
  styles.css            # Hoja de estilos principal
js/
  script.js             # Funcionalidades generales (placeholder)
  login.js              # Lógica de validación del formulario de login
```

## Instalación y Uso
1. **Descarga o clona este repositorio** en tu equipo.
2. Abre la carpeta en tu editor o servidor local.
3. Abre `index.html` en tu navegador para ver la página principal.
4. Navega entre las páginas usando el menú superior.
5. Para probar el login, asegúrate de tener un backend escuchando en `http://localhost:3001/api/login` (ver sección de notas de seguridad).

## Dependencias
- Este proyecto es completamente estático (HTML, CSS, JS puro).
- No requiere frameworks ni librerías externas para funcionar en el frontend.
- El formulario de login espera un backend REST en Node.js, Express u otro lenguaje, que reciba peticiones POST en `/api/login`.

## Detalles de cada archivo
### index.html
Página principal. Contiene:
- Encabezado con menú de navegación.
- Sección de bienvenida.
- Sección "Sobre Nosotros".
- Pie de página.

### servicios.html
Página que muestra los servicios principales de la empresa en formato de tarjetas.

### login.html
Formulario de inicio de sesión. Valida usuario y contraseña y muestra mensajes de error o éxito. Requiere backend para funcionar correctamente.

### css/styles.css
Define la apariencia de todo el sitio: navegación, tarjetas, formularios, pie de página, etc.

### js/script.js
Script general. Actualmente solo muestra un mensaje en consola al cargar la página.

### js/login.js
Valida el formulario de login y realiza la petición al backend. Muestra mensajes de error o éxito según la respuesta.

## Notas de Seguridad
- **El login implementado es solo demostrativo.** No almacena contraseñas de forma segura ni implementa buenas prácticas de autenticación.
- No uses este código en producción sin antes implementar seguridad real en el backend y frontend.

## Contacto
Para más información, contacta a TechGroup IT Solutions.
