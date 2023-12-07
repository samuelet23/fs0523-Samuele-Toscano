import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { IRegister } from '../../../Modules/i-register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formSubmitted = false;
  registerUser: IRegister = {
    email: '',
    password: '',
    nome: '',
    username: ''
  };

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authSvc:AuthService) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      nome: ['', Validators.required],
      username: ['', Validators.required]
    });
  }
  isChecked(input:string) {
    return this.registrationForm.get(input)!.invalid && (this.registrationForm.get(input)!.dirty || this.registrationForm.get(input)!.touched) ;
  }



  registrati(): void {
    this.formSubmitted = true;

    if (this.registrationForm.valid) {
      this.formSubmitted = true;
      this.authSvc.register(this.registerUser)
      .subscribe(data => {
        console.log(data);

          this.router.navigate(['/auth/login'])
  })
}
  }
}

