import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { IRegister } from '../../../Modules/i-register';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


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

  }
  isChecked(input:string) {
    return this.registrationForm.get(input)!.invalid && (this.registrationForm.get(input)!.dirty || this.registrationForm.get(input)!.touched) ;
  }

ngOnInit(){
  this.registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    nome: ['', Validators.required],
    username: ['', Validators.required]
  });
}

  registrati(): void {
    this.formSubmitted = true;


      this.formSubmitted = true;

      this.authSvc.register(this.registerUser).subscribe( data => {
            Swal.fire("Regitrazione avvenuta con successo");

            this.router.navigate(['/auth/login']);
          },
          (error) => {
            if (error instanceof HttpErrorResponse && error.status === 400) {
              if (error.error && error.error.error === "Email already exists") {
                Swal.fire("l'email è gia esistente, scegli un'altra email");
              } else {
                Swal.fire("Richiesta non valida: " + error.error);
              }
            } else {
              Swal.fire("Si è verificato un errore imprevisto, riprova tra qualche minuto");
            }
            Swal.fire(error.error)

          }
        );

  }

}

