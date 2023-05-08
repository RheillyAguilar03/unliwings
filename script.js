
const linkText = document.querySelector('.link-text')
const exisButton = document.querySelector('.exis-button')
const menuButton = document.querySelector('.menu-button')
const bodyDisable = document.querySelector('body')
const stickyBar = document.querySelector('.navigation-bar')
const hiddenContent = document.querySelectorAll('.hidden')
const hidden01Content = document.querySelectorAll('.hidden-01')
const hidden02Content = document.querySelectorAll('.hidden-02')





menuButton.onclick = () => {
    linkText.classList.add('active')
    menuButton.classList.add('hide')
    bodyDisable.classList.add('disable')
}

exisButton.onclick = () => {
    linkText.classList.remove('active')
    menuButton.classList.remove('hide')
    bodyDisable.classList.remove('disable')

}

window.onscroll = () => {
    this.scrollY > 20 ? stickyBar.classList.add('sticky') : stickyBar.classList.remove('sticky')
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
            entry.target.classList.add('show01')
            entry.target.classList.add('show02')
        } else {
            entry.target.classList.remove('show')
            entry.target.classList.remove('show01')
            entry.target.classList.remove('show02')

        }
    })
})

hiddenContent.forEach((el) => observer.observe(el))
hidden01Content.forEach((el) => observer.observe(el))
hidden02Content.forEach((el) => observer.observe(el))