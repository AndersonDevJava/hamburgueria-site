import { utilProducts } from './combos.js'

const menutoggle = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')
const voltar = document.getElementById('voltar')


// manipulação car
const shoppingcarts = document.getElementById("shopping-carts")
const painelcar = document.getElementById("painel-car")

// menu para mobile
menutoggle.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

// mostrar itens adicionados do carrinho 
  shoppingcarts.addEventListener("click", function() {
    const painelcar = document.getElementById("painel-car")
    painelcar.classList.remove("hidden")
  })

  // seta do carrinho de compras
  voltar.addEventListener("click", function() {
    history.back()
    painelcar.classList.add("hidden")
  })



utilProducts()