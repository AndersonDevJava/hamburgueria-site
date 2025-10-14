import { utilProducts } from './combos.js'
const {carrinho, saidamensagem} = utilProducts()

  const btnPrenncherDados = document.getElementById("btn-Prenncher-Dados")
  const bntenviarpedido = document.getElementById("bnt-enviar-pedido")
  const voltartelacar = document.getElementById("voltar-tela-car")
  const shoppingcarts = document.getElementById("shopping-carts")
  const paineldados = document.getElementById("painel-dados")
  const voltarHome = document.getElementById('voltar-home')
  const menutoggle = document.getElementById('menu-toggle')
  const painelcar = document.getElementById("painel-car")
  const menu = document.getElementById('menu')

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
  voltarHome.addEventListener("click", function() {
    history.back()
    painelcar.classList.add("hidden")
  })

  // mostrar painel de preencher dados
  btnPrenncherDados.addEventListener("click", () => {
    painelcar.classList.add("hidden")
    paineldados.classList.remove("hidden")
  })

  // seta do painel de preencher dados
  voltartelacar.addEventListener("click", function() {
    history.back()
    painelcar.classList.remove("hidden")
    paineldados.classList.add("hidden")
  })

  bntenviarpedido.addEventListener("click", () => {
    if(carrinho.length <= 0){
      paineldados.classList.add("hidden")
      saidamensagem(`Adicione itens ao carrinho, preencha os dados e envie pedido`)
    }
  })