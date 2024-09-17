// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  server: {
    port: 3000,
  },
  devServer: {
    port: 3000,
  },
  runtimeConfig: {
    // Make environment variables accessible here
    public: {
      STUDENT_NAME: process.env.STUDENT_NAME || 'Hafizh Kumara Widyadhana',
      STUDENT_NIM: process.env.STUDENT_NIM || '00000073191',
      // Add more environment variables as needed
    },
  },
})
