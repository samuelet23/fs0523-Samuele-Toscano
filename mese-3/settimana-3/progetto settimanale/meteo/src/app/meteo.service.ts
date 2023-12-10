import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, flatMap, from, map, of, switchMap } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Isearch } from './Modules/isearch';
import { Coord, IProduct } from './Modules/i-product';
import { IForecast } from './Modules/i-forecast';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {


  constructor(private http:HttpClient) { }



getCityMeteo(lat:number, lon:number):Observable<IProduct>{
  const apiProd = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=it&appid=${environment.apiKey}&units=metric`;
       return  this.http.get<IProduct>(apiProd)
}

getLocalName(query: string): Observable<string[]> {
  const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=3&lang=it&appid=${environment.apiKey}&units=metric`;

  return this.http.get<Isearch[]>(apiUrl).pipe(
    concatMap((response) => {
      return response.map((item) => item.local_names?.it || item.name);
    }),
    map((localName) => [localName])
  );
}


  getLatLon(query: string): Observable<Coord[]> {
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&lang=it&appid=${environment.apiKey}&units=metric`;
    return this.http.get<Isearch[]>(apiUrl).pipe(
      switchMap((response) => {
        return of(
          response.map((item) => {
            return { lat: item.lat, lon: item.lon };
          })
        );
      })
    );
  }

getById(id:number):Observable<IProduct>{
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?id=${id}&lang=it&appid=${environment.apiKey}&units=metric`
return this.http.get<IProduct>(apiUrl)
}

getById5Days(id:number):Observable<IForecast>{
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&lang=it&appid=${environment.apiKey}&units=metric`;
  return this.http.get<IForecast>(apiUrl)
}


addFavourtie(obj: IProduct): Observable<IProduct> {
  console.log('Dati inviati:', obj);
  return this.http.post<IProduct>(environment.prefeUrl, obj);
}

getFavourite():Observable<IProduct[]>{
  return this.http.get<IProduct[]>(environment.prefeUrl)
}
deleteFavourite(id:number):Observable<IProduct>{
  return this.http.delete<IProduct>(`${environment.prefeUrl}/${id}` )
}

floor(temp:number){
  return Math.floor(temp)
}

}
