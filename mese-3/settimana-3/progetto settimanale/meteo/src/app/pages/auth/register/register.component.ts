import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formSubmitted = false;
  registerUser: any = {};

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      nome: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  isChecked(input: string) {
    return this.formSubmitted && this.validateInput(input);
  }

  validateInput(input: string) {
    const control = this.registrationForm.get(input);
    return this.formSubmitted && control && control.invalid && (control.dirty || control.touched);
  }
  registrati(): void {
    this.formSubmitted = true;

    if (this.registrationForm.valid) {
      this.router.navigate(['/auth/login'])
    } else {
      const passwordControl = this.registrationForm.get('password');
      if (passwordControl && passwordControl.errors && passwordControl.errors['minlength']) {
        console.error('La password deve essere lunga almeno 4 caratteri.');
      }
    }
  }


}
