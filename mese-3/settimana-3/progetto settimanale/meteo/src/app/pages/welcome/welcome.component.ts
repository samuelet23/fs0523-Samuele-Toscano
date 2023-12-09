import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Isearch } from '../../Modules/isearch';
import { Observable, map, of, switchMap } from 'rxjs';
import { IProduct } from '../../Modules/i-product';
import { MeteoService } from '../../meteo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  isCliccked: boolean = false;
  city: string = '';
  suggerimenti: string[] = [];
  meteo!: IProduct;
  constructor(private http: HttpClient, private authSvc: AuthService, private meteoSvc:MeteoService, private route: Router) {}

  onSearchInput() {
    if (this.city.trim() === '') {
      this.suggerimenti = [];
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
        const apiProd = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${environment.apiKey}`;
        this.http.get<IProduct>(apiProd).subscribe((res) => {
          // this.meteoSvc.addToPreferiti(res)
          return this.meteo = res;
        });
      });
    });

  }

  getById() {
    this.meteoSvc.getLatLon(this.city).subscribe((obj) => {
      obj.map((data) => {
        const apiProd = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${environment.apiKey}`;
        this.http.get<IProduct>(apiProd).subscribe((res) => {
          return res.id
        });
      });
    });
  }

add(){
this.http.post('http://localhost:3000/preferiti', this.meteo).subscribe(data =>{

  this.route.navigate(['/preferiti'])

})
}

  logout() {
    this.authSvc.logout();
  }
}
