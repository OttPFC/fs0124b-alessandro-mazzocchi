


function createNumbers() {
let div = document.querySelector('.numbersTable')
for (let i = 1; i < 100; i++) {
    let number = document.createElement('div')
    number.innerText = i
    div.append(number)
}
}
createNumbers();

const btn = document.getElementsByClassName('btn');

btn.addEventListener('click',extractNumbers);

function extractNumbers(){
    let num = Math.floor(Math.random() * 100) + 1;
    let div = document.querySelector('.numbersTable')
    if (num.innerText == div.innerText) {
        div.classList.add('extracted')
    }


}


