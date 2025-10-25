// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Development tools
  devtools: { enabled: false },

  // Compatibility date
  compatibilityDate: '2025-10-25',

  // App Config
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  // Modules
  modules: ['@nuxtjs/tailwindcss'],

  // Auto-import components
  components: {
    dirs: [
      '~/components'
    ]
  },

  // TypeScript
  typescript: {
    strict: true
  }
})