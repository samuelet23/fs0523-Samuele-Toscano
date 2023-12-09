import { IProduct } from './../../Modules/i-product';
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
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
  constructor(
    private http: HttpClient,
    private authSvc: AuthService,
    private meteoSvc: MeteoService,
    private route: Router
  ) {}

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
        this.meteoSvc.getCityMeteo(data.lat, data.lon).subscribe((res) => {
          return (this.meteo = res);
        });
      });
    });
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
      this.route.navigate(['/preferiti']);
    });
  }

  logout() {
    this.authSvc.logout();
  }
}
