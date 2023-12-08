import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Ilogin } from '../../../Modules/ilogin';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, NgForm, ValidationErrors, Validators  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  constructor(private authSvc:AuthService, private router:Router, private fb:FormBuilder){}

@ViewChild('form', {static:true}) form!:NgForm

loginUser:Ilogin ={
  email: '',
  password: ''
}

loginForm!: FormGroup;
regex: RegExp  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


ngOnInit() {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, this.emailCheck]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });
}

emailCheck = (input: FormControl): ValidationErrors | null => {
  if (!this.regex.test(input.value)) {
    return {
      invalid: true,
      message: 'Non è un URL corretto'
    };
  }
  return null;
};

isChecked(input:string) {
  return this.loginForm.get(input)!.invalid && (this.loginForm.get(input)!.dirty || this.loginForm.get(input)!.touched) ;
}


submit() {

  this.authSvc.login(this.loginUser).subscribe(data => {
      Swal.fire("Il tuo login è avvenuto con successo!");
        this.router.navigate(['/welcome']);

    },
    (error) => {
      if (error.status === 401) {
        Swal.fire("Non sei registrato, registrati adesso");
        this.router.navigate(['/auth/register']);
    }
    Swal.fire(error.error)

  })

}




}
