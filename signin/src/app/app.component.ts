import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudService} from "./service/crud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'signin';
  formGroup: FormGroup;
  body: any = '';

  constructor(private fb: FormBuilder, private crudservice: CrudService) {
    this.formGroup = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
    });
  }
  get email(): AbstractControl | null { return this.formGroup.get('email'); }

  submit(): void{
    const content = '{"email" :"s' + this.email?.value + '" }';
    const jsonObject = JSON.parse(content);
    console.log(content);
    this.crudservice.post('http://localhost:3000/email', jsonObject);
    this.formGroup.reset();
  }

  logEmail(): void{
    console.log(this.email);
  }
}
