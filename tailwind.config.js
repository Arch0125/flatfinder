module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
  
}
module.exports = {
  

  plugins: [
      require('flowbite/plugin')
  ]

}
module.exports = {

  content: [
      "./node_modules/flowbite/**/*.js"
  ]

}
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
