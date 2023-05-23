/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {max: '580px'}
    },
    extend: {
      backgroundColor: {
        'color-01': 'rgba(00, 00, 00, 0.7)', 
        'color-02': '#3F3F3F',
        'color-03': '#D9D9D9', 
        'color-04': '#3AB8C7',
        'color-05': 'rgba(0, 0, 0, 0.5)',
      }, 
      animation: {
        'change-background-image': 'change-background-image 15s infinite'
      },
      keyframes: {
        'change-background-image': {
          '0%': {backgroundImage: "url('https://res.cloudinary.com/dr4yskhwv/image/upload/v1683491592/olga-ga-iRgbLpf50IE-unsplash_ibfcpt.jpg')" },
          '30%': {backgroundImage: "url('https://res.cloudinary.com/dr4yskhwv/image/upload/v1683491883/background-image-2_anee1w.jpg')"},
          '60%': {backgroundImage: "url('https://res.cloudinary.com/dr4yskhwv/image/upload/v1683491592/beautiful-endangered-american-jaguar-nature-habitat-panthera-onca-wild-brasil-brasilian-wildlife-pantanal-green-jungle-big-cats_zt48ki.jpg')"},
          '100%': {backgroundImage: "url('https://res.cloudinary.com/dr4yskhwv/image/upload/v1683491591/parrot-g9842cb5fe_1280_uxtkaf.jpg')"}
        }
      }
    },
  },
  plugins: [],
}