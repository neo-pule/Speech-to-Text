import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup,FormBuilder,NgControl } from '@angular/forms';

import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // login: FormGroup;
  login1 = {
    email : '',
    password : ''
  };
  myForm: FormGroup;
  // login = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // }); 
  constructor(private auth : AuthService,private fb: FormBuilder) { 
   
    this.auth.Hello();
  }
  
  run()
  {
    console.log(this.login1);
   // this.fb.


  //  this.signIn();
  }
  signIn(){
      this.auth.signIn(this.login1.email,this.login1.password);
  }
  ngOnInit() {
    
    // this.myForm = new FormGroup({
    // //  name: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl('')
    // });
    this.myForm = this.fb.group({
      password: ["", Validators.required],
      email: ["", Validators.email]
    });
  }
  onSubmit(): void {
    console.log(this.myForm.value);  // {first: 'Nancy', last: 'Drew'}
  }
}
