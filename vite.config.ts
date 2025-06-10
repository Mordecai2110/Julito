import { defineConfig } from "vite"; // Función para definir configuración de Vite
import react from "@vitejs/plugin-react-swc"; // Plugin para compilar React con SWC (más rápido)
import path from "path"; // Módulo nativo de Node para manejar rutas de archivos

// Exporta la configuración de Vite
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",     // ✅ Acepta conexiones externas correctamente
    port: 8080,          // Puerto del servidor local
  },
  plugins: [
    react(),             // Plugin de React para habilitar JSX, HMR, etc.
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias para importar cosas con "@/carpeta"
    },
  },
}));
