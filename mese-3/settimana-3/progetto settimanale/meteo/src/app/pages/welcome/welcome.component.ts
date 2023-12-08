import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Isearch } from '../../Modules/isearch';
import { Observable, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  isCliccked= false
  city = '';
  suggerimenti: string[] = [];

  constructor(private http: HttpClient, private authSvc:AuthService) {}

  onSearchInput() {
    if (this.city.trim() === '') {
      this.suggerimenti = [];
      return;
    }

    this.getSuggestions(this.city)
      .subscribe( suggerimenti => {
          this.suggerimenti = suggerimenti;
        },
        error => {
          console.error('Errore durante la richiesta di suggerimenti:', error);
        }
      );
  }

  selectSuggestion(suggestion: string) {
    this.city = suggestion;
    this.suggerimenti = [];
  }

  private getSuggestions(query: string): Observable<string[]> {
    const apiUrl = (`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&appid=${environment.apiKey}`)
    return this.http.get<Isearch[]>(apiUrl)
      .pipe(switchMap(response => {
            return of(response.map(item => item.name));

        })
      );
  }

  creaCard(){


  }

  logout(){
    this.authSvc.logout()
  }


}



