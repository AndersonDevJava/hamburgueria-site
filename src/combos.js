export function utilProducts() {

    
  const itensMenu = [
    { img: 'img/imgMenu/Salgados/hamb-1Mn.png', title: 'Hamburgues' },
    { img: 'img/imgMenu/Salgados/coxinhaMn.png', title: 'Salgados' },
    { img: 'img/imgMenu/Salgados/pizzaMn.png', title: 'Pizzas' },
    { img: 'img/imgMenu/combos/comboMn.png', title: 'Combos' },
    { img: 'img/imgMenu/Gelados/acaiMn.png', title: 'acaí' },
    { img: 'img/imgMenu/Liquidos/bebidasMn.png', title: 'Bebidas' },
  ]

    const banner = [
    { img: 'img/hamb-2.png' },
    { img: 'img/agua.png' },
    { img: 'img/hamb-3.png' },
    { img: 'img/Suco-1.png' },
    { img: 'img/hamb-4.png' },
    { img: 'img/suco-2.png' },
    { img: 'img/hamb-5.png' },
    { img: 'img/acaii.png' },
    { img: 'img/hamb-6.png' },
    { img: 'img/guarana.png' },
    { img: 'img/hamb-7.png' },
    { img: 'img/coca-cola.png' },
  ]
  
  const containerCombos = document.getElementById('combos')
  const containerMenu = document.getElementById('menu')
  const containerBanner = document.getElementById('carousel-track')

   // Cards Combos

   combosSemana.forEach(combo => {
    const divCombos = document.createElement("div")

    divCombos.className = "grid gap-3 bg-black p-3 mx-auto items-center shadow-[0_0_12px_rgb(237,187,25)] rounded-lg combo-card"
    divCombos.innerHTML = `
    <img src="${combo.img}" class="mx-auto sm:flex w-full h-40 rounded-md"/>
    <h1 class="font-semibold text-center text-2xl">${combo.title}</h1>
    <p class="text-gray-400 text-center">${combo.desc} <span class="text-yellow-400">${combo.price}</span></p>
    <button class="combo-card bg-red-900 text-center p-3 w-fit mx-auto rounded-sm">adicionar ao carrinho</buttom>
    `
    containerCombos.appendChild(divCombos)
    })

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

    // Banner
  banner.forEach((banner) => {
    const divbanner = document.createElement('div')

    divbanner.className = `w-50 h-auto rounded-lg shadow-md mx-2 flex-shrink-0`

    divbanner.innerHTML = `
        <img src="${banner.img}" class="w-50 h-auto rounded-lg shadow-md"/>
        `
    containerBanner.appendChild(divbanner)
  })   
}