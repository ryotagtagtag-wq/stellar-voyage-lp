import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Public assets use root-relative paths during authoring. Rewrite them to
 * Vite's configured base so they work at both the site root (local dev) and
 * the repository subpath (GitHub Pages production build).
 */
function publicImagePaths(base) {
  const normalizedBase = base.endsWith('/') ? base : `${base}/`

  return {
    name: 'public-image-base-paths',
    enforce: 'pre',
    transform(source, id) {
      if (!id.endsWith('.vue')) return null

      const transformed = source
        // Static image src attributes become Vue bindings with a literal base.
        .replace(/src="\/images\/([^\"]+)"/g, (_match, filename) =>
          `:src="'${normalizedBase}images/${filename}'"`,
        )
        // Rewrite image paths in script data and dynamic bindings.
        .replace(/'\/images\/([^']+)'/g, (_match, filename) =>
          `'${normalizedBase}images/${filename}'`,
        )

      return transformed === source ? null : transformed
    },
  }
}

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/stellar-voyage-lp/' : '/'

  return {
    plugins: [publicImagePaths(base), vue()],
    // Use the repository subpath for production GitHub Pages builds, and the
    // root path for the local Vite development server.
    base,
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
    server: {
      port: 5173,
      open: true,
    },
  }
})
