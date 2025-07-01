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
        'banner-gradient': 'linear-gradient(135deg, #ffb74d 0%, #ff8a80 50%, #ff6b9d 100%)',
        'banner-gradient-soft': 'linear-gradient(135deg, #fff8f5 0%, #ffeee8 50%, #fce4ec 100%)',
      }
    },
  },
  plugins: [],
}