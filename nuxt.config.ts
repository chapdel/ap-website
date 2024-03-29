// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [
    { src: '~/plugins/aos.client', mode: 'client' },
  ],
});
