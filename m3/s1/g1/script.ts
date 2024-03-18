interface cotrattoSim{
credito:number 
numeroChiamate:number
}

class User implements cotrattoSim{
    nome: string;
    cognome: string;
    credito:number 
    numeroChiamate:number
    
    constructor(nome:string, cognome:string){
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    ricarica(importo: number): string {
        if (importo <= 0) {
            return "L'importo di ricarica deve essere positivo.";
        }
    
        const limiteMassimoCredito = 100; 
        const creditoDopoRicarica = this.credito + importo;
    
        if (creditoDopoRicarica > limiteMassimoCredito) {
            return `La ricarica non può superare il limite massimo di ${limiteMassimoCredito} euro.`;
        }
    
        this.credito += importo;
        return `La ricarica di ${importo} euro è stata effettuata. Il nuovo credito disponibile è di ${this.credito} euro. Grazie.`;
    }
    
    chiamata(durataMinuti: number) {
        const costoMinuto = 0.20;
        const costoTotale = costoMinuto * durataMinuti;

        if (this.credito >= costoTotale) {
            this.credito -= costoTotale;
            this.numeroChiamate += durataMinuti;
            return (`Effettuata chiamata di ${durataMinuti} minuti . Credito residuo: ${this.credito} euro.`);
        } else {
            return ("Credito insufficiente per effettuare la chiamata.");
        }
    }
    chiama404(): string{
        return `Il credito disponibile è di ${this.credito} euro.`
    }
    getNumeroChiamata(){
        if(this.numeroChiamate == 0){
            return "Non hai ancora chiamate."
        }else{
            return `Hai ${this.numeroChiamate} minuti di chiamata effettuati.`
        }
    }

    azzeraChiamate(){
        this.numeroChiamate = 0;
        if(this.numeroChiamate == 0){
            return `Il numero di chiamate effettuate è stato azzerato. Grazie.`
        }else{
            return 'Qualcosa è anadato storto, prova a ripetere l operazione fra qualche minuto.'
        }

    }
}

const user = new User('Giuseppe', 'Rossi')

console.log(user.ricarica(30))
console.log(user.chiama404())
console.log(user.ricarica(20))
console.log(user.chiama404())
console.log(user.chiamata(20))
console.log(user.chiama404())
console.log(user.chiamata(80))
console.log(user.getNumeroChiamata())
console.log(user.azzeraChiamate())
console.log(user.getNumeroChiamata())

const ricarica = <HTMLButtonElement>document.querySelector('#ricarica')
const chiama = <HTMLButtonElement>document.querySelector('#chiama')
const c404 = <HTMLButtonElement>document.querySelector('#c404')
const tempo = <HTMLButtonElement>document.querySelector('#tempo')
const azzera = <HTMLButtonElement>document.querySelector('#azzera')
const news = <HTMLDivElement>document.querySelector('#news')

ricarica.addEventListener('click', () => {
    const importo = document.createElement('div')
    importo.classList.add('border-bottom', 'border-dark')
    news.appendChild(importo)
    importo.innerText = user.ricarica(2)
    
})

chiama.addEventListener('click', () => {
    const durata = document.createElement('div')
    durata.classList.add('border-bottom', 'border-dark')
    news.appendChild(durata)
    durata.innerText = user.chiamata(20)
    
})

    tempo.addEventListener('click', () => {
    const durata = document.createElement('div')
    news.appendChild(durata)
    durata.innerText = user.getNumeroChiamata()
    
});

azzera.addEventListener('click', () => {
    
    const azzerato = document.createElement('div')
    azzerato.classList.add('border-bottom', 'border-dark')
    news.appendChild(azzerato)
    azzerato.innerText = user.azzeraChiamate()
});

c404.addEventListener('click', () => {
    const residuo = document.createElement('div')
    news.appendChild(residuo)
    residuo.innerText = user.chiama404()
});