//Document Object Model (DOM)

document.tittle = 'bogenk07'
let body = document.body
body.append("LEARN JAVASCRIPT FUNDAMENTAL")

let h1 = document.createElement('h1')
h1.textContent = "THIS IS H1"
body.append(h1)

const newText = document.createElement('h1')
newText.textContent = "new text"
body.append(newText)


const namaSaya = document.createElement('p')
namaSaya.innerHTML = "<marquee>EGA TETAMA</marquee>"
const namaKamu = document.createElement('p')
namaKamu.innerText = "DEA AFRIZAL"
body.append(namaSaya)
body.append(namaKamu)

