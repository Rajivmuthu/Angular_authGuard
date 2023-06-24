import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private router: Router) { }
  name: string = '';
  email: string = '';
  password: any = '';

  form(){
    this.router.navigate(['table']);
  }

}
