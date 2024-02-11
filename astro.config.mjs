import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ZanobiJS",
      favicon: "/src/assets/logo.png",
      logo: {
        src: "/src/assets/logo.png",
      },
      customCss: ["/src/tailwind/tailwind.css"],
      social: {
        github: "https://github.com/devdroide/ZanobiJS",
      },
      sidebar: [
        {
          label: "¿Cómo Empezar?",
          translations: {
            en: "Getting Started",
          },
          items: [
            {
              label: "Instalación",
              translations: {
                en: "Install",
              },
              link: "/01-getting-started/install/",
            },
            {
              label: "Primeros Pasos",
              translations: {
                en: "First steps",
              },
              link: "/01-getting-started/first-step/",
            },
          ],
        },
        {
          label: "Fundamentos",
          translations: {
            en: "Fundamentals",
          },
          items: [
            {
              label: "Introducción",
              translations: {
                en: "Introduction",
              },
              link: "/02-fundamentals/introduction/",
            },
            {
              label: "ZanobiJS",
              translations: {
                en: "ZanobiJS",
              },
              link: "/02-fundamentals/zanobijs/",
            },
            {
              label: "Módulos",
              translations: {
                en: "Modules",
              },
              link: "/02-fundamentals/modules/",
            },
            {
              label: "Controladores",
              translations: {
                en: "Controllers",
              },
              link: "/02-fundamentals/controllers/",
            },
            {
              label: "Servicios",
              translations: {
                en: "Services",
              },
              link: "/02-fundamentals/services/",
            },
            {
              label: "Proveedores",
              translations: {
                en: "Providers",
              },
              link: "/02-fundamentals/providers/",
            },
          ],
        },
        {
          label: "CLI",
          translations: {
            en: "CLI",
          },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Descripción General",
              translations: {
                en: "Overview",
              },
              link: "/03-cli/overview/",
            },
            {
              label: "Uso",
              translations: {
                en: "Usage",
              },
              link: "/03-cli/usage/",
            },
          ],
        },
        {
          label: "Librerías oficiales",
          translations: {
            en: "Official Libraries",
          },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "HTTP",
              translations: {
                en: "HTTP",
              },
              link: "/04-official-libraries/http/",
            },
            {
              label: "AWS",
              translations: {
                en: "AWS",
              },
              link: "/04-official-libraries/aws/",
            },
          ],
        },
        {
          label: "Apoyanos",
          translations: {
            en: "Support us",
          },
          link: "/05-support-us/supportus/",
        },
      ],
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
        en: {
          label: "English",
        },
      },
    }),
    tailwind(),
  ],
});
