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
    
    chiamata(durataMinuti: number): void {
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
        return this.numeroChiamate
    }

    azzeraChiamate(){
        this.numeroChiamate = 0;
        return `Il numero di chiamate effettuate è stato riportato a ${this.numeroChiamate} . Grazie.`

    }
}

const user = new User('Giuseppe', 'Rossi')

console.log(user.ricarica(90))

console.log(user.chiama404())

console.log(user.azzeraChiamate())
console.log(user.chiamata(20))
console.log(user.getNumeroChiamata())