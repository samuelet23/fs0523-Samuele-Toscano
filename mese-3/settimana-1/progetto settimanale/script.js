"use strict";
class SmartPhone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.registroChiamate = [];
        this.contatore = 0;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `${this.carica} €`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    getHour() {
        return new Date().getHours();
    }
    chiamata(min) {
        let callPrice = min * this.costoMinuto;
        this.carica -= callPrice;
        this.numeroChiamate++;
        this.registroChiamate.push({
            id: this.contatore,
            durata: min,
            dataOra: this.getHour(),
        });
        this.contatore++;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    mostraRegistroChiamate() {
        return this.registroChiamate;
    }
    filtraChiamatePerDataOra(orario) {
        return this.registroChiamate.filter((call) => {
            return call.dataOra === orario;
        });
    }
}
let cell = new SmartPhone();
cell.chiamata(10);
cell.chiamata(10);
cell.chiamata(10);
cell.chiamata(10);
cell.chiamata(10);
cell.chiamata(10);
console.log(cell.filtraChiamatePerDataOra(12));
// cell.ricarica(50) //ricarica 50
// console.log(cell.numero404()); //controllo il credito disponibille
// cell.chiamata(5) //effettuo una chiamata di 5 minuti ( che mi costerà €1)
// console.log(cell.getNumeroChiamate()); //controllo quante chiamate ho effettuato
// console.log(cell.numero404()); // ricontrollo il credito disponibile vedendo che è sceso di un €1 (arrivando a €49)
// cell.chiamata(10) //effettuo una chiamata di 10 minuti  ( che mi costerà €2)
// console.log(cell.numero404()); // ricontrollo il credito disponibile vedendo che è sceso di altri €2 (arrivando a €47)
// cell.azzeraChiamate() //azzero le chiamate
// console.log(cell.getNumeroChiamate()); //controllo se le chiamate sono state azzerate correttamente
// console.log("-----------------------------------------------------");
// let cell1:SmartPhone = new SmartPhone ()
// cell1.ricarica(5)  //ricarica 5
// console.log(cell1.numero404());  //controllo il credito disponibille
// cell1.chiamata(20) //effettuo una chiamata di 20 minuti ( che mi costerà €4)
// console.log(cell1.getNumeroChiamate());//controllo quante chiamate ho effettuato
// console.log(cell1.numero404()); // ricontrollo il credito disponibile vedendo che è sceso di un €4 (arrivando a €1)
// cell1.chiamata(30) //effettuo una chiamata di 30 minuti  ( che mi costerà €5)
// console.log(cell1.numero404()); // ricontrollo il credito disponibile vedendo che è sceso di altri €5(arrivando a -€4)
// cell1.azzeraChiamate()  //azzerro le chiamate
// console.log(cell1.getNumeroChiamate());//controllo se le chiamate sono state azzerate
// console.log("-----------------------------------------------------");
// let cell2:SmartPhone = new SmartPhone ()
// cell2.ricarica(10) //ricarica di 10
// console.log(cell2.numero404()); //controllo il credito disponibille
// cell2.chiamata(40) //effettuo una chiamata di 40 minuti ( che mi costerà €8)
// console.log(cell2.getNumeroChiamate()); //controllo quante chiamate ho effettuato
// console.log(cell2.numero404()); // ricontrollo il credito disponibile vedendo che è sceso di un €8 (arrivando a €2)
// cell2.chiamata(15) //effettuo una chiamata di 15 minuti  ( che mi costerà €3)
// console.log(cell2.numero404()); // ricontrollo il credito disponibile vedendo che è sceso di altri €3 (arrivando a -€1)
// cell2.azzeraChiamate() //azzero le chiamate
// console.log(cell2.getNumeroChiamate()); //controllo se le chiamate sono state azzerate correttamente
