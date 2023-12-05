import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {

  urlRegex: string = '/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/';
  form!:FormGroup

  constructor(private formBuuilder:FormBuilder){}

  ngOnInit(){
    this.form= this.formBuuilder.group({
      nome: this.formBuuilder.control(null,[Validators.required]),
      cognome: this.formBuuilder.control(null,[Validators.required]),
      password: this.formBuuilder.control(null,[Validators.required]),
      confermaPassword: this.formBuuilder.control(null,[Validators.required]),
      genere: this.formBuuilder.control(null,[Validators.required]),
      immagineProfilo: this.formBuuilder.control(null,[Validators.required,this.urlImageCheck]),
      biografia: this.formBuuilder.control(null,[Validators.required]),
      username: this.formBuuilder.control(null,[Validators.required])


    })

  }


  getCustomMessage(fieldName: string): string {
    const errors = this.form.get(fieldName)?.errors;
    return errors ? errors['message'] : '';
  }

  urlImageCheck = (input: FormControl): ValidationErrors | null => {
    if (!new RegExp(this.urlRegex).test(input.value)) {
      return {
        invalid: true,
        message: 'Non è un URL corretto'
      };
    }
    return null;
  };


  isValid(name:string){
    return this.form.get(name)?.valid
  }

  isTouched(name:string){
    return this.form.get(name)?.touched
  }

  isBoth(name:string){
    return !this.isValid(name) && this.isTouched(name)
  }
  iscriviti(form:FormGroup){
    if(form.valid){
      return alert('Ti sei registrato con successo')
    }
    return alert('Compila tutti i campi')
  }

  isSame(passwordValue: string, secondoPasswordValue: string) {
    if (passwordValue === secondoPasswordValue) {
      return true;
    }

    return false;
  }





  }


