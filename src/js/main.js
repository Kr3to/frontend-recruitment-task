const overlay = document.querySelector('.popup__overlay')
const content = document.querySelector('.popup__content')
const closebtn = document.querySelector('.popup__close')
const btn = document.querySelector('.description__button')

const popupOpen = () =>{
    overlay.classList.add('active')
    content.classList.add('active')
}

const popupClose = () =>{
    overlay.classList.remove('active')
    content.classList.remove('active')
}

btn.addEventListener("click", popupOpen)
overlay.addEventListener("click", popupClose)
closebtn.addEventListener("click", popupClose)