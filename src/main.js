import { utilProducts } from './combos.js'

const menutoggle = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')
const mensagemsaida = document.getElementById('mensagemsaida')
const mensagem = document.getElementById('mensagem')
const button = document.querySelectorAll('button')

menutoggle.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

function saidamensagem(text) {
  mensagemsaida.classList.remove('opacity-0')
  mensagem.innerText = text
  setTimeout(() => {
    mensagemsaida.classList.add('opacity-0')
  }, 4000)
}

const day = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

const date = new Date()
const nowdate = day[date.getDay()]

if (nowdate === 'Segunda') {
    button.forEach((btn) => {
      btn.addEventListener('click', () => {
        saidamensagem('Não abrimos nas segundas-feiras!')
      })
    })
} else {
  saidamensagem(mensagem.innerText)
}

utilProducts()