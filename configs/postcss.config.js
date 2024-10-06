import tailwindConfig from './tailwind.config.js'

export default {
  plugins: {
    tailwindcss: { config: tailwindConfig },
    autoprefixer: {},
  }
}