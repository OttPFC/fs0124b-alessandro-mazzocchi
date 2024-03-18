var User = /** @class */ (function () {
    function User(nome, cognome, credito, numeroChiamate) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.ricarica = function (importo) {
        return "La ricarica di ".concat(importo, " euro \u00E8 stata effettuata.\nIl suo credito disponibile \u00E8 ora di ").concat(this.credito + importo, " euro.\nGrazie.");
    };
    User.prototype.chiamata = function () {
    };
    User.prototype.chiama404 = function () {
        return "Il credito disponibile \u00E8 di ".concat(this.credito, " euro.");
    };
    User.prototype.getNumeroChiamata = function () { };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        return "Il numero di chiamate effettuate \u00E8 stato riportato a ".concat(this.numeroChiamate, " . Grazie.");
    };
    return User;
}());
var user = new User('Giuseppe', 'Rossi', 20, 90);
console.log(user.ricarica(90));
console.log(user.chiama404());
console.log(user.azzeraChiamate());
