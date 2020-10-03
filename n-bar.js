const el = document.querySelector('header')
console.log(el)
const elH = el.offsetHeight + "px"

function addTopBar() {
    if( el === null ) {
        return
    }
    console.log("SPUSTENE - " + elH)
    el.className += " fixedTopBar"
    const newDiv = document.createElement('div')
    newDiv.className = "mojanova"
    newDiv.style.height = elH
    el.insertAdjacentElement("afterend", newDiv)
}

addTopBar();