const overlay = document.querySelector('.popup__overlay')
const content = document.querySelector('.popup__content')
const openButtons = document.querySelectorAll('[data-modal-target]')
const closeButtons = document.querySelectorAll('[close-popup]')
const resetbtn = document.querySelector('.count__reset')

let clickCount = JSON.parse(localStorage.getItem('click'))

const openPopup = target => {
    if (target == null) return
    target.classList.add('active')
    overlay.classList.add('active')
    clickCount = clickCount + 1
    localStorage.setItem('click', JSON.stringify(clickCount))
    document.querySelector('.popup__count').textContent = clickCount
    document.querySelector('.count__text').textContent = clickCount > 1 ? " times" : " time"
    if(clickCount >= 5) resetbtn.style.display = "block"
}

const closePopup = target => {
    if (target == null) return
    target.classList.remove('active')
    overlay.classList.remove('active')
}

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.dataset.modalTarget)
        openPopup(target)
    })
})

content.addEventListener("click", e => {
    e.stopPropagation()
})
  
overlay.addEventListener('click', () => {   
    const targets = document.querySelectorAll('.popup__content.active')
        targets.forEach(target => {
        closePopup(target)
    })
})
  
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.closest('.target')
        closePopup(target)
    })
})

resetbtn.addEventListener("click", () => {
    localStorage.clear()
    window.location.reload()
})