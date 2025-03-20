import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuración del servidor de desarrollo
    historyApiFallback: true, // Esto no funciona directamente en Vite, así que usamos un middleware
    middlewareMode: true, // Opcional, pero útil para personalizar
    fs: {
      // Asegura que Vite sirva archivos desde la raíz correctamente
      strict: false,
    },
    // Middleware personalizado para redirigir todas las rutas a index.html
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        // Si la solicitud no es para un archivo estático (como .png, .css, etc.)
        if (!req.url.match(/\.\w+$/)) {
          req.url = '/'; // Redirige a la raíz (index.html)
        }
        next();
      });
    },
  },
});