import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://byshennan.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    sanity({
      projectId: "ibg0jnpd",
      dataset: "production",
      apiVersion: "2022-02-21",
      useCdn: true,
    }),
  ],
});
