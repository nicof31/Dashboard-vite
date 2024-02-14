// Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Login.css'; // Asegúrate de crear un archivo CSS para estilos

const Login = () => {
  const handleLogin = () => {
    // Aquí puedes implementar la lógica de autenticación si es necesario
    // Por ahora, simplemente redirigimos al usuario a la página principal
    // después de hacer clic en el botón de inicio de sesión
    // (Simulamos la autenticación exitosa)
    alert('Inicio de sesión exitoso');
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form>
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" />

        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>

      <p>
        ¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link>.
      </p>
    </div>
  );
};

export default Login;
