

const aggiungi = document.getElementById('aggiungi');

function inserisciNome(nome) {
    nome = prompt('Inserisci il nome della Task')
    let titolo = document.getElementById('titolo');
    titolo.innerText = nome;
}
//inserisciNome()

aggiungi.addEventListener('click',function(){

    const taskInput = document.getElementById('task')
    let taskValue = taskInput.value

    
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    checkbox.addEventListener('click',function(){
        if(checkbox.checked){
            li.style.textDecoration = 'line-through';
        }else{
            li.style.textDecoration = 'none';
        }
    })



    let rimuovi = document.createElement('button');
    rimuovi.innerText = 'Rimuovi';
    li.append(rimuovi);
    rimuovi.addEventListener('click',function(){
        li.remove();
    });

    let textContent = document.createTextNode(taskValue);
    li.appendChild(textContent);

    let ul = document.getElementById('lista')
    ul.appendChild(li);

    taskInput.value = '';
});


function spuntaCheck(){

}