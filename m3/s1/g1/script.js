var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (importo) {
        if (importo <= 0) {
            return "L'importo di ricarica deve essere positivo.";
        }
        var limiteMassimoCredito = 100;
        var creditoDopoRicarica = this.credito + importo;
        if (creditoDopoRicarica > limiteMassimoCredito) {
            return "La ricarica non pu\u00F2 superare il limite massimo di ".concat(limiteMassimoCredito, " euro.");
        }
        this.credito += importo;
        return "La ricarica di ".concat(importo, " euro \u00E8 stata effettuata. Il nuovo credito disponibile \u00E8 di ").concat(this.credito, " euro. Grazie.");
    };
    User.prototype.chiamata = function (durataMinuti) {
        var costoMinuto = 0.20;
        var costoTotale = costoMinuto * durataMinuti;
        if (this.credito >= costoTotale) {
            this.credito -= costoTotale;
            this.numeroChiamate += durataMinuti;
            return ("Effettuata chiamata di ".concat(durataMinuti, " minuti . Credito residuo: ").concat(this.credito, " euro."));
        }
        else {
            return ("Credito insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.chiama404 = function () {
        return "Il credito disponibile \u00E8 di ".concat(this.credito, " euro.");
    };
    User.prototype.getNumeroChiamata = function () {
        if (this.numeroChiamate == 0) {
            return "Non hai ancora chiamate.";
        }
        else {
            return "Hai ".concat(this.numeroChiamate, " minuti di chiamata effettuati.");
        }
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        if (this.numeroChiamate == 0) {
            return "Il numero di chiamate effettuate \u00E8 stato azzerato. Grazie.";
        }
        else {
            return 'Qualcosa è anadato storto, prova a ripetere l operazione fra qualche minuto.';
        }
    };
    return User;
}());
var user = new User('Giuseppe', 'Rossi');
console.log(user.ricarica(30));
console.log(user.chiama404());
console.log(user.ricarica(20));
console.log(user.chiama404());
console.log(user.chiamata(20));
console.log(user.chiama404());
console.log(user.chiamata(80));
console.log(user.getNumeroChiamata());
console.log(user.azzeraChiamate());
console.log(user.getNumeroChiamata());
var ricarica = document.querySelector('#ricarica');
var chiama = document.querySelector('#chiama');
var c404 = document.querySelector('#c404');
var tempo = document.querySelector('#tempo');
var azzera = document.querySelector('#azzera');
var news = document.querySelector('#news');
var inputRicarica = document.querySelector('#inputRicarica');
ricarica.addEventListener('click', function () {
    var importo = document.createElement('div');
    importo.classList.add('border-bottom', 'border-dark');
    news.appendChild(importo);
    var importoRicarica = parseFloat(inputRicarica.value);
    importo.innerText = user.ricarica(importoRicarica);
});
chiama.addEventListener('click', function () {
    var durata = document.createElement('div');
    durata.classList.add('border-bottom', 'border-dark');
    news.appendChild(durata);
    durata.innerText = user.chiamata(20);
});
tempo.addEventListener('click', function () {
    var durata = document.createElement('div');
    news.appendChild(durata);
    durata.innerText = user.getNumeroChiamata();
});
azzera.addEventListener('click', function () {
    var azzerato = document.createElement('div');
    azzerato.classList.add('border-bottom', 'border-dark');
    news.appendChild(azzerato);
    azzerato.innerText = user.azzeraChiamate();
});
c404.addEventListener('click', function () {
    var residuo = document.createElement('div');
    news.appendChild(residuo);
    residuo.innerText = user.chiama404();
});
