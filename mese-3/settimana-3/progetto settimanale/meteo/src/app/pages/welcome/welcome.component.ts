import { IProduct } from './../../Modules/i-product';
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { MeteoService } from '../../meteo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  city: string = '';
  suggerimenti: string[] = [];
  meteo!: IProduct
  meteoCt!: IProduct
  meteoMil!: IProduct


  constructor(
    private meteoSvc: MeteoService,
  ) {}

    ngOnInit(){

  this.meteoSvc.getCityMeteo(37.5023612, 15.0873718).subscribe((res)=> {
    return this.meteoCt = res
  })



}

  getById() {
    this.meteoSvc.getLatLon(this.city).subscribe((obj) => {
      obj.map((data) => {
        this.meteoSvc.getCityMeteo(data.lat, data.lon).subscribe((res) => {
          return res.id;
        });
      });
    });
  }

  add() {
    this.meteoSvc.addFavourtie(this.meteo).subscribe((data) => {
      Swal.fire(`Hai aggiunto ${this.meteo.name} ai preferiti con successo`);
    });
  }


}
