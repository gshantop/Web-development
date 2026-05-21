let menu = document.querySelector('#menu')
let navbar = document.querySelector('nav')

menu.onclick = () =>{
    navbar.classList.toggle('nav-toggle')
    menu.classList.toggle('fa-bars')
    menu.classList.toggle('fa-times')
}

window.onscroll = () =>{
    navbar.classList.remove('nav-toggle')
    menu.classList.add('fa-bars')
    menu.classList.toggle('fa-times')
}