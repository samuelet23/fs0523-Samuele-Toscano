

class SonAccount {
    balanceInit: number = 0;
     deposit(n:number ):number {
      return this.balanceInit += n;
     
    }
     withDraw(n:number): number  {
        if (this.balanceInit<= 0 ) {
           return this.balanceInit
        }
        return this.balanceInit -=n
    }
}

class MotherAccount extends SonAccount{

    addInterest(): number {
        return this.balanceInit * 1.1
    }
}

let son = new SonAccount()
let mother = new MotherAccount()