const entities = [
  {
    text: 'Первый кот',
    img: 'img\пейзаж-вода-девушка-доска-6334780.jpeg'
  },
  {
    text: 'Второй кот',
    img: 'img\Фоновый рисунок средства просмотра фотографий Windows.jpg'
  },
  {
    text: 'Третий кот',
    img: 'img\Lighthouse.jpg'
  }
]

const text = document.querySelector('.text')
const img = document.querySelector('.image')

const setEntity = (index) => {
  text.innerText = entities[index].text
  img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentIndex = 0

prev.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
})
next.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
})