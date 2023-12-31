import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { MeteoService } from '../../meteo.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../Modules/i-product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isIn!:boolean;
  isCliccked: boolean = false;
  isFull:boolean = false;
  city: string = '';
  suggerimenti: string[] = [];
  meteo!: IProduct
isHeartFilled: boolean = false;




constructor(private authSvc:AuthService,   private http: HttpClient,
  private meteoSvc: MeteoService,
  private route: Router){}

ngOnInit(){
  this.authSvc.isLoggedIn$.subscribe(isLoggedIn =>
    this.isIn = isLoggedIn
    )
}
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  toggleHeart() {
    this.isHeartFilled = !this.isHeartFilled;
  }
  onSearchInput() {
    if (this.city.trim() === '') {
      this.suggerimenti = [];
      this.isCliccked =  true
      this.isFull =true
      return;
    }


    this.meteoSvc.getLocalName(this.city).subscribe(
      (suggerimenti) => {
        this.suggerimenti = suggerimenti;

      },
      (error) => {
        console.error('Errore durante la richiesta di suggerimenti:', error);
      }
    );
  }
  selectSuggestion(suggestion: string) {
    this.city = suggestion;
    this.suggerimenti = [];
  }

  creaCard() {
    this.isCliccked = true;
    this.meteoSvc.getLatLon(this.city).subscribe((obj) => {
      obj.map((data) => {
        this.meteoSvc.getCityMeteo(data.lat, data.lon).subscribe((res) => {
          return (this.meteo = res);
        });
      });
    });
  }
  add() {
    this.meteoSvc.addFavourtie(this.meteo).subscribe((data) => {
      Swal.fire(`Hai aggiunto ${this.meteo.name} ai preferiti con successo`);
    });
  }
  logout() {
    this.authSvc.logout();
  }
}
