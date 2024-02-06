const navToggle = document.getElementsByClassName('navToggle')[0]
const navButtons = document.getElementsByClassName('navButtons')[0]

navToggle.addEventListener('click', () => {
    navButtons.classList.toggle('active')
})