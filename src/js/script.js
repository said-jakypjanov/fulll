const tabItems = Array.from(document.querySelectorAll('.tab-item'))

const contentItems = Array.from(document.querySelectorAll('.content-item'))

const clearActiveClass = (element, className = 'is-active') => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${ className }`)
}


const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('is-active')) return
    console.log(item)
    clearActiveClass(tabItems)
    clearActiveClass(contentItems)
    setActiveClass(tabItems, index)
    setActiveClass(contentItems, index)
  })
}

tabItems.forEach(checkoutTabs)