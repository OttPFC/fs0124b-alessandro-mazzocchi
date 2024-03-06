const getLibrary = function () {
    fetch(
        'https://striveschool-api.herokuapp.com/books'
    )
    .then((response) => {
        console.log('response', response)
        if (response.ok) {
            return response.json();
        }else {
            if (response.status === 404) {
                throw new Error('404 - Pagina non trovata')
            } else if (response.status === 500) {
                throw new Error('500 - Internal server error')
            } else {
                throw new Error('Errore generico')
            }
        }
    })
    .then((bookObj) => {
        console.log('bookObj', bookObj)
        for(let book of bookObj){
            let div = document.createElement('div')
            let card = document.createElement('div')
            let img = document.createElement('img')
            let title = document.createElement('h5')
            let price = document.createElement('p')
            let category = document.createElement('a')
            let asin = document.createElement('p')
            let compra = document.createElement('button')
            let elimina = document.createElement('button')
            div.classList.add('p-2');
            card.classList.add('card','col-3', 'p-0', );
            img.classList.add('card-img-top', 'im-card')
            div.classList.add('card-body')
            compra.classList.add('btn', 'btn-success', 'btn-sm', 'me-1')
            elimina.classList.add('btn', 'btn-danger', 'btn-sm')
            title.innerText = book.title;
            img.src = book.img;
            price.innerText = 'Prezzo: $' + book.price;
            category.innerText = 'Categoria:'+ book.category;
            asin.innerText = 'ASIN:'+ book.asin;
            compra.innerText = 'Compra'
            elimina.innerText = 'Manco morto'
            console.log(title);
            document.querySelector('#books').append(card)
            card.append(img)
            card.append(div)
            div.append(title)
            div.append(price)
            div.append(category)
            div.append(asin)
            div.append(compra)
            div.append(elimina)
            
        }
    })
}
getLibrary();