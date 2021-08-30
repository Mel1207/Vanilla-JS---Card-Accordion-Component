'use strict'

const acbtn = document.querySelector('.accordion-btn');
const acContent = document.querySelector('.accordion-content')


const toggleOpen = function () {
    acContent.classList.toggle('open')
}

acbtn.addEventListener('click', toggleOpen)
