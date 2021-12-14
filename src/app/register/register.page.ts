import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  register: FormGroup;
  register1 = {
    Fname: '',
    Lname: '',
    email: '',
    phone: 0,
    address: '',
    password : ''
  }
  constructor(public fb: FormBuilder,private auth : AuthService) { 
    
  }
  run(){
    console.log(this.register1);
    this.signUp();
  }
  signUp(){
    this.auth.signUp(this.register1.email,this.register1.password);
}
  ngOnInit() {
    // this.register = this.fb.group({
    //   Fname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30), Validators.required])],
    //   Lname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30), Validators.required])],
    //   phone: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30),Validators.required])],
    //   address: ['', Validators.required],
    //   email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    //    password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
    //    cpassword: ['', Validators.required],
    // }, {
    //   //  validator: MustMatch('password', 'cpassword')
    // });
  }
onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.Fname);
    console.log('Name', form.value.Lname);
    console.log('Email', form.value.email);
    console.log('Name', form.value.phone);
    console.log('Name', form.value.address);
    console.log('Name', form.value.password);
  }
}
