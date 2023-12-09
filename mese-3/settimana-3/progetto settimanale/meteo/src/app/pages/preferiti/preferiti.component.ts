import { IProduct } from './../../Modules/i-product';
import { Component } from '@angular/core';
import { MeteoService } from '../../meteo.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {
  meteo!: IProduct[];

  constructor(private meteoSvc: MeteoService, private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.http.get<IProduct[]>('http://localhost:3000/preferiti').subscribe(data => {
      if (data.length > 0) {
        this.meteo = data;
      } else {
        Swal.fire('Non hai aggiunto nessuna città ai preferiti');
        this.route.navigate(['/welcome']);
      }
    });
  }


  delete(id:number, name:string){
this.http.delete<IProduct>(`http://localhost:3000/preferiti/${id}` ).subscribe(data =>{

  Swal.fire(`Hai rimosso ${name} correttamente dai preferiti`)
      this.route.navigate(['/welcome'])
  })

  }

}
