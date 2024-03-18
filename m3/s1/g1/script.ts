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
            console.log(`Chiamata effettuata per ${durataMinuti} minuti. Credito residuo: ${this.credito} euro.`);
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    chiama404(){
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
//console.log(user.azzeraChiamate())
console.log(user.getNumeroChiamata())


const ricarica = <HTMLButtonElement>document.querySelector('#ricarica')
const chiama = <HTMLButtonElement>document.querySelector('#chiama')
const c404 = <HTMLButtonElement>document.querySelector('#c404')
const tempo = <HTMLButtonElement>document.querySelector('#tempo')
const azzera = <HTMLButtonElement>document.querySelector('#azzera')

ricarica.addEventListener('click', () => {
    const importo = document.createElement('div')
    importo.classList.add('nuovo')
    document.body.appendChild(importo)
    importo.innerText = user.ricarica(2)
    azzera.addEventListener('click', () => {
        user.azzeraChiamate()
        document.body.removeChild(importo)
    });
})

/* 
chiama.addEventListener('click', () => {
    const durata = document.createElement('div')
    document.body.appendChild(durata)
    durata.innerText = user.getNumeroChiamata()
    tempo.addEventListener('click', () => {
        user.chiama404()
        document.body.removeChild(durata)
    });
});
*/
