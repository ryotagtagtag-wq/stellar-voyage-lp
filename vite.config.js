import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Public assets use root-relative paths during authoring. Rewrite them to
 * Vite's configured base so they work at both the site root (local dev) and
 * the repository subpath (GitHub Pages production build).
 */
function publicImagePaths() {
  return {
    name: 'public-image-base-paths',
    enforce: 'pre',
    transform(source, id) {
      if (!id.endsWith('.vue')) return null

      const transformed = source
        // Static image src attributes need to become Vue bindings.
        .replace(/src="\/images\/([^"]+)"/g, ':src="import.meta.env.BASE_URL + \'images/$1\'"')
        // Rewrite image paths in script data and dynamic bindings.
        .replace(/'\/images\/([^']+)'/g, "import.meta.env.BASE_URL + 'images/$1'")

      return transformed === source ? null : transformed
    },
  }
}

export default defineConfig(({ command }) => ({
  plugins: [publicImagePaths(), vue()],
  // Use the repository subpath for production GitHub Pages builds, and the
  // root path for the local Vite development server.
  base: command === 'build' ? '/stellar-voyage-lp/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
}))
