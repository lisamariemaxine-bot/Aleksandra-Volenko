import { defineConfig } from 'vite'

// Vite bouwt de single-page site; Vitest (unit tests) gebruikt dezelfde config.
export default defineConfig({
  build: {
    target: 'es2022',
    // three.js is groot; één bundel is hier prima, dus de waarschuwing mag hoger.
    chunkSizeWarningLimit: 1200,
    // Alle pagina's van de site meebouwen.
    rollupOptions: {
      input: {
        main: 'index.html',
        artist: 'artist.html',
        tickets: 'tickets.html',
        peek: 'peek.html',
      },
    },
  },
  test: {
    include: ['tests/unit/**/*.test.js'],
    environment: 'node',
  },
})
