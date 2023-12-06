import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {

  urlRegex: RegExp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control(null, [Validators.required]),
      cognome: this.formBuilder.control(null, [Validators.required]),
      password: this.formBuilder.control(null, [Validators.required]),
      confermaPassword: this.formBuilder.control(null, [Validators.required]),
      genere: this.formBuilder.control,
      immagineProfilo: this.formBuilder.control(null, [Validators.required, this.urlImageCheck]),
      biografia: this.formBuilder.control(null, [Validators.required]),
      username: this.formBuilder.control(null, [Validators.required])
    });
  }

  registrati() {
    console.log(this.form.valid);
    if (this.form.valid) {
      return alert('Registration successful!');
    } else {
      Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
        console.log(control);

      });
    }
  }
  urlImageCheck = (input: FormControl): ValidationErrors | null => {
    if (!this.urlRegex.test(input.value)) {
      return {
        invalid: true,
        message: 'Non è un URL corretto'
      };
    }
    return null;
  };

  isValid(name: string) {
    return this.form.get(name)?.valid;
  }

  isTouched(name: string) {
    return this.form.get(name)?.touched;
  }

  isBoth(name: string) {
    return !this.isValid(name) && this.isTouched(name);
  }

  isSame(passwordValue: string, secondoPasswordValue: string) {
    return passwordValue === secondoPasswordValue;
  }


  getCustomMessage(fieldName: string): string {
    const errors = this.form.get(fieldName)?.errors;
    return errors ? errors['message'] : '';
  }
}



