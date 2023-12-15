import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

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
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Ngày đầu tiên',
          link: '/23-10-03',
        },
        {
          label: 'Tuần đầu tiên',
          link: '/23-10-07',
        },
        {
          label: 'Tuần thứ hai',
          link: '/23-10-14',
        },
        {
          label: 'Một ngày thứ năm',
          link: '/23-10-19',
        },
        {
          label: 'Tuần thứ ba',
          link: '/23-10-21',
        },
        {
          label: 'Không thể bỏ lỡ',
          link: '/23-10-25',
        },
        {
          label: 'Tháng đầu tiên',
          link: '/23-10-28',
        },
        {
          label: 'Những ngày tháng cần thay đổi',
          link: '/23-11-05',
        },
        {
          label: 'What if I die?',
          link: '/23-11-12',
        },
        {
          label: 'Tuần này mình làm được điều gì nhỉ?',
          link: '/23-11-19',
        },
        {
          label: 'Những ngày trực',
          link: '/23-11-24',
        },
        {
          label: 'Tháng cuối cùng của 2023',
          link: '/23-12-02',
        },
        {
          label: 'Work hard and play hard!',
          link: '/23-12-06',
        },
      ],
      tableOfContents: false,
      pagination: false,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
