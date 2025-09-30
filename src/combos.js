export function utilProducts() {

    
  const itensMenu = [
    { img: 'img/imgMenu/Salgados/hamb-1Mn.png', title: 'Hamburgues' },
    { img: 'img/imgMenu/Salgados/coxinhaMn.png', title: 'Salgados' },
    { img: 'img/imgMenu/Salgados/pizzaMn.png', title: 'Pizzas' },
    { img: 'img/imgMenu/combos/comboMn.png', title: 'Combos' },
    { img: 'img/imgMenu/Gelados/acaiMn.png', title: 'acaí' },
    { img: 'img/imgMenu/Liquidos/bebidasMn.png', title: 'Bebidas' },
  ]
  
  const containerMenu = document.getElementById('menu')

  // Menu itens
  itensMenu.forEach((item) => {
    const limenu = document.createElement('li')

    limenu.className = 'bg-black p-3 combo-card list-none'

    limenu.innerHTML = `
    <img src="${item.img}" class="w-10 h-10 rounded-full mx-auto"/>
    <h3 class="text-white font-semibold text-center hover:text-red-400">${item.title}</h3>
    `
    containerMenu.appendChild(limenu)
  })
}