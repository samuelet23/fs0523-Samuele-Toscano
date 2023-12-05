import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

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

@ViewChild('form', {static:true}) form!:NgForm


  submit(form:NgForm){
    console.log(this.form)
    console.log(form)
    console.log(form.value)
    form.reset()

  }



isEmpty(input:NgModel){
  return !input.value && input.dirty
}


}
