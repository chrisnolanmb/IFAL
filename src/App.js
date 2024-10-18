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
import { ThemeProvider } from "@/components/ui/theme-provider";

// Si estás utilizando algún CSS global, impórtalo aquí
// import './globals.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground shadow-lg p-4">
          <h1 className="text-2xl font-bold">Análisis de Inscripciones</h1>
        </header>
        <main className="container mx-auto py-8">
          <Dashboard />
        </main>
        <footer className="bg-secondary text-secondary-foreground mt-8 p-4 text-center">
          <p>© 2024 Tu Institución Educativa. Todos los derechos reservados.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
