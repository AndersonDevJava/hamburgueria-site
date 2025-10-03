export function utilProducts() {
const defaultIcon = "fa-solid fa-cart-shopping";

const combos = {
  salgados: [
    { img: "img/imgcomboSemana/comboSalgado/especialCB.png", title: "Especial", desc: "1 Hamburguer tradicional, 1 batata média e 1 coca lata.", price: "35,99", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboSalgado/Quatroirmaos.png", title: "Quatro Irmãos", desc: "4 hamburguers tradicionais, carne, pão alface molho e picles.", price: "35,99", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboSalgado/especialEspecialCB.png", title: "Especial especial", desc: "1 pizza pequena de calabresa com 1 coca lata.", price: "35,99", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboSalgado/cafeManhaCB.jpeg", title: "Café da Manhã", desc: "Servimos apenas no restaurante local.", price: "35,99", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboSalgado/solteiroCB.png", title: "Solteiro", desc: "1 hamburguer com 1 batata média.", price: "35,99", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboSalgado/familiaCB.png", title: "Família", desc: "3 hamburguers tradicionais, 1 coca 2L, 1 pizza média e 2 batatas médias", price: "35,99", icone: defaultIcon },
  ],

  doces: [
    { img: "img/imgcomboSemana/comboDoces/comboleve.png", title: "Combo leve", desc: "Cookie macio com gotas de chocolate e milkshake leve de chocolate.", price: "16,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboDoces/docedelicia.png", title: "Combo Doce Delícia", desc: "Rosquinha com cobertura de chocolate e bowl de balas de goma coloridas.", price: "22,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboDoces/encantado.png", title: "Combo Encantado", desc: "Bolo de chocolate, milkshake cremoso e sorvete colorido.", price: "27,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboDoces/Megadocao.png", title: "Mega Combodocão", desc: "Milkshake, donuts extras, brownie e bowl de confeitos crocantes.", price: "29,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboDoces/minicombosso.png", title: "Mini Combosso", desc: "Milkshake com donut, donut holes e macarons sortidos.", price: "14,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/comboDoces/superdocao.png", title: "Super Combodocão", desc: "Milkshake com donut, cupcakes, macarons e cookies recheados.", price: "16,90", icone: defaultIcon },
  ],

  mistos: [
    { img: "img/imgcomboSemana/combodocesSalgados/bigbombox.png", title: "Dev Big BomBBox", desc: "Hambúrguer suculento, batata crocante e milkshake cremoso.", price: "29,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/combodocesSalgados/combao.png", title: "Dev Big Combão", desc: "Batata frita, coxinha, milkshake e cupcake cremoso.", price: "26,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/combodocesSalgados/combodelicia.png", title: "Combo Delícia", desc: "Cheeseburger, batata frita e sundae de morango.", price: "26,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/combodocesSalgados/megamix.png", title: "Mega Combomix", desc: "Hambúrguer, batata frita, donut rosa, milkshake e nuggets.", price: "39,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/combodocesSalgados/superbox.png", title: "Super BomBBox", desc: "Coxinha, cupcake, batata crocante e milkshake especial.", price: "34,90", icone: defaultIcon },
    { img: "img/imgcomboSemana/combodocesSalgados/superburguer.png", title: "Super Comboburguer", desc: "Cheeseburger, batata frita, milkshake com donut e sundae.", price: "36,90", icone: defaultIcon },
  ]
};

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
  const mensagemsaida = document.getElementById('mensagemsaida')
  const mensagem = document.getElementById('mensagem')


  // ===== Lógica para exibir combos pelos dias =====

  const diaSemanda = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado',]
  const data = new Date()
  const dayNow = diaSemanda[data.getDay()]

  function saidamensagem(text) {
  mensagemsaida.classList.remove('opacity-0')
  mensagem.innerText = text
  setTimeout(() => {
    mensagemsaida.classList.add('opacity-0')
  }, 4000)
}

   function renderPages(item, container){
    item.forEach(item => {
      const div = document.createElement("div")

      div.className = "grid gap-3 bg-black p-3 mx-auto items-center shadow-[0_0_12px_rgb(237,187,25)] rounded-lg combo-card"
      div.innerHTML = `
       <img src="${item.img}" class="mx-auto sm:flex w-full h-40 rounded-md"/>
    <h1 class="font-semibold text-center text-2xl">${item.title}</h1>
    <p class="text-gray-400 text-center">${item.desc} <span class="text-yellow-400">${item.price}</span></p>
    <button class="combo-card bg-red-900 text-center p-3 w-fit mx-auto rounded-sm">adicionar ao carrinho</buttom>
      `
      container.appendChild(div)
    })
  }

  switch (dayNow){
    case "Segunda":
      saidamensagem("Não abrimos nas segundas-feiras!");
      break;
    case "Domingo":
    case "Terça":
      renderPages(combos.salgados, containerCombos);
      saidamensagem("Primeiro Login = Primeira entraga grátis");
      break;
    case "Quarta":
    case "Quinta":
      renderPages(combos.doces, containerCombos);
      saidamensagem("Primeiro Login = Primeira entraga grátis");
      break;
    case "Sexta":
    case "Sábado":
      renderPages(combos.mistos, containerCombos);
      saidamensagem("Primeiro Login = Primeira entraga grátis");
      break;
  }


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