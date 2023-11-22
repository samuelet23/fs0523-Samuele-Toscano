"use strict";
class Dati {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
class User extends Dati {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
        this.getUtileTasse();
    }
    getUtileTasse() {
        console.log(this.getTasseInps());
        console.log(this.getTasseIrpef());
        console.log(this.getRedditoAnnuoNetto());
        return this.getRedditoAnnuoNetto() - this.getTasseInps() - this.getTasseIrpef();
    }
    getTasseInps() {
        return this.getRedditoAnnuoNetto() * (this.tasseinps / 100);
    }
    getTasseIrpef() {
        return this.getRedditoAnnuoNetto() * (this.tasseirpef / 100);
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.redditoannuolordo * (this.codredd / 100);
    }
}
let user = new User(40, 6000, 26, 43);
