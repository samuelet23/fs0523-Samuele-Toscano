import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss'
})
export class NavAuthComponent {
isIn!:boolean;
constructor(private authSvc:AuthService){}

ngOnInit(){
  this.authSvc.isLoggedIn$.subscribe(isLoggedIn =>
    this.isIn = isLoggedIn
    )
}
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
