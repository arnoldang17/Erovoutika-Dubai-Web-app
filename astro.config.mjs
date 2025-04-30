import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 
import react from '@astrojs/react';

// Import the dotenv plugin to handle environment variables for dynamic content
import dotenv from 'dotenv';

dotenv.config(); 

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    
    server: {
    define: {
      
      'process.env.PUBLIC_SUPABASE_URL': JSON.stringify(process.env.PUBLIC_SUPABASE_URL),
      'process.env.PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(process.env.PUBLIC_SUPABASE_ANON_KEY),
    },
  },
}
});