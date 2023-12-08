import { IaccessToken } from './Modules/iaccess-token';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.development';
import { IRegister } from './Modules/i-register';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Ilogin } from './Modules/ilogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwt:JwtHelperService = new JwtHelperService()
  subj = new BehaviorSubject<IaccessToken|null>(null)
  user$ = this.subj.asObservable()
  isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)))


  constructor(
    private http:HttpClient,
    private router:Router
    ){

    this.checkUser()
   }

registerUrl:string = `${environment.authUrl}/register`
loginUrl:string = `${environment.authUrl}/login`
userUrl:string = `${environment.authUrl}/users`


register(obj:IRegister):Observable<IaccessToken>{
return this.http.post<IaccessToken>(this.registerUrl, obj)
}



login(data: Ilogin): Observable<IaccessToken> {
  return this.http.post<IaccessToken>(this.loginUrl, data)
    .pipe(tap(data => {
      this.subj.next(data);
      localStorage.setItem('accessData', JSON.stringify(data));
      this.autoLogout(data.accessToken);
    }));
}

autoLogout(jwt:string){
  const expDate = this.jwt.getTokenExpirationDate(jwt) as Date;
  const expMs = expDate.getTime() - new Date().getTime();

  setTimeout(()=>{
    this.logout()
  },expMs)
}

logout(){
  this.subj.next(null);
  localStorage.removeItem('accessData');
  this.router.navigate(['/auth/login']);
  Swal.fire("Hai effetuato il Logout");

}
checkUser(){
  const userJson:string|null =  localStorage.getItem('accessData');
  if(!userJson) return;

  const accessData:IaccessToken = JSON.parse(userJson);
  if(this.jwt.isTokenExpired(accessData.accessToken)) return;

  this.autoLogout(accessData.accessToken)
  this.subj.next(accessData)
}

}
