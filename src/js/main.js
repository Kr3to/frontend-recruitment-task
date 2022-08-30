const overlay = document.querySelector('.popup__overlay')
const content = document.querySelector('.popup__content')
const btn = document.querySelector('.button')
const closebtn = document.querySelector('.popup__close')
const resetbtn = document.querySelector('.count__reset')

let clickCount = JSON.parse(localStorage.getItem('click'))

const popupOpen = () =>{
    overlay.classList.add('active')
    content.classList.add('active')
    clickCount = clickCount + 1
    localStorage.setItem('click', JSON.stringify(clickCount))
    document.querySelector('.popup__count').textContent = clickCount
    document.querySelector('.count__text').textContent = clickCount > 1 ? " times" : " time"
    if(clickCount >= 5) resetbtn.style.display = "block"
}

const popupClose = () =>{
    overlay.classList.remove('active')
    content.classList.remove('active')
}

btn.addEventListener("click", popupOpen)

content.addEventListener("click", e =>{
    e.stopPropagation()
})

overlay.addEventListener("click", popupClose)
closebtn.addEventListener("click", popupClose)

resetbtn.addEventListener("click", () =>{
    localStorage.clear()
    window.location.reload()
})