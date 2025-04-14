import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const repositoryName = 'PORTFOLIO_BRANCH';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/PORTFOLIO_BRANCH/`, // Set the base path to /PORTFOLIO_BRANCH/
  
});