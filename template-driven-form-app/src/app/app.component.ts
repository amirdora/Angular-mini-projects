import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm! : NgForm;
  defaultQuestion = "basic";
  submited : boolean = false;
  user = {
    "email" : "",
    "password" : "",
    "secret" : ""
  }
  
  onFormSubmit(){
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.secret = this.signupForm.value.secret;

    this.submited = true;


    console.log(this.signupForm)
  }

}

