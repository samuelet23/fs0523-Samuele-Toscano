import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregister } from '../../Models/iregister';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Iaccess } from '../../Models/iaccess';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authSubject = new BehaviorSubject<Iaccess|null>(null)

  apiUrl:string = ' http://localhost:3000'
  loginUrl:string = this.apiUrl + '/login'
  registerUrl:string = this.apiUrl + '/registrazione'

  constructor(private http:HttpClient) { }

  genereteToken(data:Iregister):Observable<Iaccess>{
    return this.http.post<Iaccess>(this.apiUrl, data);
  }


  login(data:Iaccess):Observable<Iaccess>{
    return this.http.post<Iaccess>(this.loginUrl, data)
    .pipe(tap(data => {

      this.authSubject.next(data)
      localStorage.setItem('accessData',JSON.stringify(data))

    }))

}
}

