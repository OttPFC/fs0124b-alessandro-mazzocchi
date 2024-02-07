//aggiungo cose alla lista
const invia = document.getElementById('aggiungi')
invia.addEventListener('click',()=>{
    let task = document.getElementById('task').value
    let lista = document.getElementById('lista')
    //let creaLista = document.createElement('ul')
    let elemento = document.createElement('li')
    elemento.innerText = task
    lista.appendChild(elemento)
    
})
//crea checkbox alla creazione dell'elemento
invia.addEventListener('click',()=>{
    let lista = document.getElementById('lista')
    let element = document.createElement('input')
    element.type = 'checkbox'
    lista.appendChild(element)
})

//rimuovo dalla lista
const rimuovi = document.getElementById('rimuovi')
rimuovi.addEventListener('click',rimuoviDo)
function rimuoviDo(){
    let lista = document.getElementById('lista')
    lista.removeChild(lista.lastChild)
}

//inserisco il nome della lista
function inserisciNome(nome) {
    nome = prompt('Inserisci il nome della Task')
    let titolo = document.getElementById('titolo');
    titolo.innerText = nome;
}
