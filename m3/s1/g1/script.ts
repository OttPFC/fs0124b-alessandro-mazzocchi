interface cotrattoSim{
credito:number 
numeroChiamate:number
}

class User implements cotrattoSim{
    nome: string;
    cognome: string;
    credito:number 
    numeroChiamate:number
    
    constructor(nome:string, cognome:string,credito:number,numeroChiamate:number){
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(importo:number){
        return `La ricarica di ${importo} euro è stata effettuata.\nIl suo credito disponibile è ora di ${this.credito + importo} euro.\nGrazie.` ;
    }
    chiamata(){

    }
    chiama404(){
        return `Il credito disponibile è di ${this.credito} euro.`
    }
    getNumeroChiamata(){}

    azzeraChiamate(){
        this.numeroChiamate = 0;
        return `Il numero di chiamate effettuate è stato riportato a ${this.numeroChiamate} . Grazie.`

    }
}

const user = new User('Giuseppe', 'Rossi', 20,90)

console.log(user.ricarica(90))

console.log(user.chiama404())

console.log(user.azzeraChiamate())