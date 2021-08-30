'use strict'

const acbtn = document.querySelectorAll('.accordion-btn');
const acContent = document.querySelectorAll('.accordion-content');
const accContainer = document.querySelector('.accordion-container');

const findClose = (e) => {
    const target = e.target.closest('.accordion-btn')
    

    if(!target) return

    acContent.forEach(cont => {
        cont.classList.remove('open')
    })

    // target.firstElementChild.nextElementSibling
    // console.log(target.firstElementChild())
    console.log(target.dataset.src)
    target.lastElementChild.classList.add('open')

    // acContent.forEach(content => {
    //     content.classList.remove('open')
    // })

    // if(target === true) {
    //     document.querySelector(`.content${target.dataset.src}`).classList.add('open')
    // }
}

accContainer.addEventListener('click', findClose)

