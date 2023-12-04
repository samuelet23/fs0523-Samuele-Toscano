import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { iProduct } from '../../iproduct';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {

  constructor(private productSvc:ProductsService){}
  preferiti: iProduct[] = [];


  ngOnInit(){
    this.productSvc.preferiti$.subscribe((nuoviPreferiti) => {
      this.preferiti = nuoviPreferiti;
    });
  }

  rimuovi(prodotto: iProduct): void {
    // Implementa la logica per rimuovere il prodotto dall'array e dal service
    const index = this.preferiti.indexOf(prodotto);
    if (index !== -1) {
      this.preferiti.splice(index, 1);
      this.productSvc.aggiornaSubject(); // Assicurati di aggiornare il Subject dopo la rimozione
    }
  }
}
