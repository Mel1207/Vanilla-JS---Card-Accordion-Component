'use strict'

const acbtn = document.querySelectorAll('.accordion-btn');
const acContent = document.querySelector('.accordion-content')

const toggleOpen = function () {
    acContent.classList.toggle('open')
}

acbtn.forEach(btn => {
    btn.addEventListener('click', toggleOpen)
})


