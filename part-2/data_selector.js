//Data Selector

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.getElementById('btn3')
let h1 = document.createElement('h1')


btn1.style.border = 'none'
btn1.style.background = 'tomato'
btn2.style.fontSize = '24px'
btn2.style.padding = '8px'


function changeColor() {
    console.log('color has changed')
    alert('im clicked')
    btn1.style.background = 'aqua'
}

function changeText() {
    console.log('text has changed')
    btn2.textContent = 'hellooo'
}

function returnText() {
    console.log('text has returned')
    btn2.textContent = 'click here2'
}



function addText() {
    h1.textContent = "THIS IS H1"
    body.append(h1)
    console.log('text has added')
}
