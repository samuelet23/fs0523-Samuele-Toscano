"use strict";
class SonAccount {
    constructor() {
        this.balanceInit = 0;
    }
    deposit(n) {
        return this.balanceInit += n;
    }
    withDraw(n) {
        if (this.balanceInit <= 0) {
            return this.balanceInit;
        }
        return this.balanceInit -= n;
    }
}
class MotherAccount extends SonAccount {
    addInterest() {
        return this.balanceInit * 1.1;
    }
}
let son = new SonAccount();
let mother = new MotherAccount();
//# sourceMappingURL=script.js.map