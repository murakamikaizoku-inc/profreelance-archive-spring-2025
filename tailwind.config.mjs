/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'banner-pink': '#ff6b9d',
        'banner-coral': '#ff8a80', 
        'banner-orange': '#ffb74d',
        'banner-peach': '#ffccbc',
      },
      backgroundImage: {
        'banner-gradient': 'linear-gradient(135deg, #ffb3d1 0%, #ff8a95 50%, #ffb74d 100%)',
        'banner-gradient-soft': 'linear-gradient(135deg, #fdf7fa 0%, #fff3e0 50%, #ffe0cc 100%)',
      }
    },
  },
  plugins: [],
}