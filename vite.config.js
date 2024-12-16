import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que la ruta base esté bien definida
  build: {
    outDir: 'dist', // Asegura que el build se guarde en 'dist'
    assetsDir: 'assets', // Carpeta para recursos estáticos
  },
});
