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
  
  const containerMenu = document.getElementById('menu')
  const containerBanner = document.getElementById('carousel-track')


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