import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {


  form!:FormGroup

  constructor(private formBuuilder:FormBuilder){}

  ngOnInit(){
    this.form= this.formBuuilder.group({
      nome: this.formBuuilder.control(null,[Validators.required]),
      cognome: this.formBuuilder.control(null,[Validators.required]),
      password: this.formBuuilder.control(null,[Validators.required]),
      confermaPassword: this.formBuuilder.control(null,[Validators.required]),
      genere: this.formBuuilder.control(null,[Validators.required]),
      immagineProfilo: this.formBuuilder.control(null,[Validators.required]),
      biografia: this.formBuuilder.control(null,[Validators.required]),
      username: this.formBuuilder.control(null,[Validators.required])


    })

  }

  isValid(name:string){
    return this.form.get(name)?.valid
  }

  isTouched(name:string){
    return this.form.get(name)?.touched
  }

  isBoth(name:string){
    return this.isValid(name) && this.isTouched(name)
  }
}
