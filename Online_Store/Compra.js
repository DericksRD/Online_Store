let img_src = localStorage.getItem('img_src')
let new_img = document.createElement('img')

let main = document.getElementById('buy_grid')
let div = document.getElementById('form')

new_img.src = img_src
main.insertBefore(new_img, div)

let text = localStorage.getItem('h2')
let h2 = document.createElement('h2')
h2.innerHTML = text

let section = document.getElementById('buy_section')
section.insertBefore(h2, main)

localStorage.clear()