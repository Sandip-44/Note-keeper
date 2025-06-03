// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  plugins: ["~/plugins/supabase.client.js"],
  modules: ["@samk-dev/nuxt-vcalendar", "@nuxtjs/supabase"],

  runtimeConfig: {
    // server-only:
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    public: {
      // your .env variables get mapped here:
      supabaseUrl: process.env.SUPABASE_URL as string,
      supabaseKey: process.env.SUPABASE_KEY as string,
    },
  },
  // supabase: {
  //   url: process.env.SUPABASE_URL as string,
  //   key: process.env.SUPABASE_KEY as string,
  //  "@nuxtjs/supabase"

  // },
});
