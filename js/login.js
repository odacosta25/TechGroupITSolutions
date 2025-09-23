// js/login.js
// Validación básica de login con mensaje de bienvenida (solo demostración, no seguro para producción)
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const loginSuccess = document.getElementById('loginSuccess');

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        loginError.style.display = 'none';
        loginSuccess.style.display = 'none';
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value;

        if (username.length < 4 || password.length < 6) {
            loginError.textContent = 'Usuario o contraseña inválidos.';
            loginError.style.display = 'block';
            return;
        }

        try {
            const res = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                loginSuccess.textContent = data.message;
                loginSuccess.style.display = 'block';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1800);
            } else {
                loginError.textContent = data.message || 'Error de autenticación';
                loginError.style.display = 'block';
            }
        } catch (err) {
            loginError.textContent = 'No se pudo conectar al servidor.';
            loginError.style.display = 'block';
        }
    });
});