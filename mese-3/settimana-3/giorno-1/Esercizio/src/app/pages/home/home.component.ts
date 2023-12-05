import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { iProduct } from '../../iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private productSvc: ProductsService){}

  products:iProduct[]=[]


  salvaProdotto(nuovoProdotto: iProduct) {
    this.productSvc.salva(nuovoProdotto);

  }

  aggiungiAlCarrello(nuovoProdotto: iProduct) {
    this.productSvc.aggiungi(nuovoProdotto);
  }

   ngOnInit(){
    this.productSvc.getAll().subscribe((response:any) => {

        this.products = response.products;

    })
   }
}
