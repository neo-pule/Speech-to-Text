import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: FormGroup;
  login1 = {
    email : '',
    password : ''
  };
  constructor(private auth : AuthService) { 
    this.auth.Hello();
  }
  run()
  {
    console.log(this.login1);
    this.signIn();
  }
  signIn(){
      this.auth.signIn(this.login1.email,this.login1.password);
  }
  ngOnInit() {
  }

}
