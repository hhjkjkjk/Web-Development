const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarMenu = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active')
})