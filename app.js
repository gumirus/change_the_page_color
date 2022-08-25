import getRandomColor from './utils/utils'

export default function initApp() {
  console.log('Hello world')
  const button = document.createElement('button')
  button.className = 'button'
  button.textContent = 'Изменить цвет страницы'
  document.body.append(button)

  const getButton = document.querySelector('.button')
  getButton.addEventListener('click', (event) => {
    const { target } = event
    if (target) {
      document.body.style.background = getRandomColor()
    }
  })
}