// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1>Bienvenido a mi aplicación React</h1>
//       <p>Esta app está desplegada en GitHub Pages.</p>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Dashboard from "./Dashboard"; // Asegúrate de que la ruta de importación sea correcta

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white shadow-lg p-4">
        <h1 className="text-2xl font-bold">Análisis de Inscripciones</h1>
      </header>
      <main className="container mx-auto py-8">
        <Dashboard />
      </main>
      <footer className="bg-gray-200 mt-8 p-4 text-center text-gray-600">
        <p>© 2024 Tu Institución Educativa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
