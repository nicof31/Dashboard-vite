import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa BrowserRouter y otros componentes de React Router
import App from './App.jsx';
import HistorialView from './components/HistorialView.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Envuelve la aplicación en el componente Router */}
      <Switch>
        <Route path="/historial"> {/* Define la ruta /historial */}
          <HistorialView /> {/* Renderiza el componente de la vista de historial */}
        </Route>
        <Route path="/"> {/* Define la ruta raíz */}
          <App /> {/* Renderiza el componente principal de la aplicación */}
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
);
