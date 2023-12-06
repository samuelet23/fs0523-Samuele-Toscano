import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Iregister } from '../../../Models/iregister';
import { Router } from '@angular/router';

type Registrazione = {
  username:string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private authSvc:AuthService, private router:Router){}
userRegister:Iregister={
  email: '',
  password: ''
}
@ViewChild('form', {static:true}) form!:NgForm


save(){
   this.authSvc.genereteToken(this.userRegister).subscribe(token =>{
      this.router.navigate(['/profilo'])
   })
  }



isEmpty(input:NgModel){
  return !input.value && input.dirty
}


}

