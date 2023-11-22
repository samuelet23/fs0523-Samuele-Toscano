abstract class Dati {

    constructor(
        protected codredd: number, 
        protected redditoannuolordo:number, 
        protected tasseinps:number, 
        protected tasseirpef:number 
        ){}

        abstract    getUtileTasse():number
        abstract    getTasseInps ():number
        abstract    getTasseIrpef():number
        abstract    getRedditoAnnuoNetto():number

}

class User extends Dati{

    constructor( codredd: number, redditoannuolordo:number, tasseinps:number, tasseirpef:number ){
        super( codredd, redditoannuolordo, tasseinps, tasseirpef  )
        this.getUtileTasse()
    }


    getUtileTasse():number{
        
        console.log(this.getTasseInps());
        console.log(this.getTasseIrpef());
        console.log(this.getRedditoAnnuoNetto());

        
             return  this.getRedditoAnnuoNetto() - this.getTasseInps() - this.getTasseIrpef()
    }
    getTasseInps ():number{
            return  this.getRedditoAnnuoNetto() * (this.tasseinps / 100)  
    }

    getTasseIrpef():number{
        
           return this.getRedditoAnnuoNetto() * (this.tasseirpef / 100) 
     
    }
    getRedditoAnnuoNetto():number{
            return this.redditoannuolordo - this.redditoannuolordo * (this.codredd / 100)
    }
}


let user = new User(40, 6000,26,43 )
