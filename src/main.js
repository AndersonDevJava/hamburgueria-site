import { utilProducts } from './combos.js'

const menutoggle = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')


menutoggle.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

utilProducts()