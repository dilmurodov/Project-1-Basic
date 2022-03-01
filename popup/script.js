'use strict';


const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const showBtn = document.querySelectorAll('.show-modal')

showBtn.forEach((item) => item.addEventListener('click', (event) => {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}))

closeBtn.addEventListener('click', (event)=> {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})
