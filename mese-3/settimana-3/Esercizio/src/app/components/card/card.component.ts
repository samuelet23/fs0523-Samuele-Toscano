import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { iProduct } from '../../iproduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent  {
 constructor(private cardService: ProductsService){}

 products:iProduct[]=[]


 ngOnInit(){
  this.cardService.getAll().subscribe((response:any) => {

      this.products = response.products;

  })
 }
}
