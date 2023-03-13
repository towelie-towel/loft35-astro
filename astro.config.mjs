import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

//astro.build/config
//import node from "@astrojs/node";

//astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
});
