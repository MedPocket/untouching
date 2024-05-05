import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://medpocket.github.io'
    : 'http://localhost:4321',
  base: '/untouching',
  integrations: [
    starlight({
      title: 'Untouching',
      customCss: ['./src/styles/globals.css'],
      social: {
        github: 'https://github.com/MedPocket/untouching',
      },
      components: {
        Head: './src/components/Head.astro',
      },
      tableOfContents: false,
      pagination: false,
      plugins: [starlightLinksValidator()],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
