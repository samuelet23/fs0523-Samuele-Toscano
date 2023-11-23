
interface Clothes {
    
        id:number,
        codprod:number,
        collezione:string,
        capo:string,
        modello:number,
        quantita:number,
        colore:string,
        prezzoivaesclusa:number,
        prezzoivainclusa:number,
        disponibile:string,
        saldo:number


        getsaldocapo():number 
        getacquistocapo():number
    
    }

class Dress implements Clothes{

    constructor(
     public id:number,
     public codprod:number,
     public collezione:string,
     public capo:string,
     public modello:number,
     public quantita:number,
     public colore:string,
     public prezzoivaesclusa:number,
     public prezzoivainclusa:number,
     public disponibile:string,
     public saldo:number
    ){}

    getsaldocapo(): number {
      return   this.prezzoivainclusa * (this.saldo / 100)
    }

    getacquistocapo(): number {
      return  this.prezzoivainclusa - this.getsaldocapo()
    }

}


async function getClothes():Promise <void> {
    let res: Response  = await fetch('Abbigliamento.json')
    let data: Clothes[] = await res.json()
    return data.forEach((e:Clothes) => {
      let newClass = new Dress (e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo)
     console.log(newClass.getsaldocapo());
     console.log(newClass.getacquistocapo())
    
    })
}

console.log(getClothes());

