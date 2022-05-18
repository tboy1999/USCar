const sidebarItems = document.querySelectorAll(".sidebar__item")
const productContents = document.querySelectorAll(".product__content")
sidebarItems.forEach((sidebarItem, index) => {
  sidebarItem.onclick = () => {
    document.querySelector(".product__content.product__content--active").classList.remove("product__content--active")
    document.querySelector(".sidebar__item.sidebar__item--active").classList.remove("sidebar__item--active")
    sidebarItem.classList.add("sidebar__item--active")
    productContents[index].classList.add("product__content--active")
  }
})

const iconMenu = document.querySelector(".header__icon-menu")
const menu = document.querySelector(".header__menu")
const close = document.querySelector(".close")

iconMenu.onclick = () => {
  menu.classList.add("header__menu--active")
}
close.onclick = () => {
  menu.classList.remove("header__menu--active")
}

