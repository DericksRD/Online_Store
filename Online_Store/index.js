let div_element = document.getElementsByClassName('grid_element')
    // console.log(div_element[0])

for (let i = 0; i < div_element.length; i++) {
    div_element[i].addEventListener('click', function() {
        //Getting the src of the img and the text of the p element.
        let img = div_element[i].childNodes[1]
        localStorage.setItem('img_src', img.src)

        let p = div_element[i].childNodes[3]
        localStorage.setItem('h2', p.innerHTML)

        window.location = "Compra.html"
    })
}