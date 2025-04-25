const hamMenu = document.querySelector('.ham-div');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

const btn = document.querySelector('.menu-button');
const img = document.querySelector('.menu-img');

btn.addEventListener('mouseenter', () => img.classList.add('blur'));
btn.addEventListener('mouseleave', () => img.classList.remove('blur'));
