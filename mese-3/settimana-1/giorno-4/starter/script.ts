class Dress {

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
      return  this.prezzoivainclusa * (this.saldo / 100)
    }

    getacquistocapo(): number {
      return  this.prezzoivainclusa - this.getsaldocapo()
    }

}


async function getClothes():Promise <Dress[]> {
    let res: Response  = await fetch('Abbigliamento.json')
    let data: Dress[] = await res.json()
    return data.map((e:Dress) => {
       return new Dress (e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo)
    })
}

getClothes().then((result)=>{
    console.log(result);
});

