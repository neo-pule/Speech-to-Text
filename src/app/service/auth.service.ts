import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
// import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,Auth } from "firebase/auth";
import { User } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    // let obj = auth.currentUser;
    // console.log(obj)
    
   }
   signUp(email, password){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
   }
   signIn(email, password){
   const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(auth.currentUser)
    alert(user.email)
    console.log(user);
    // console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
   }
   Hello(){
    // console.log(this.auth.currentUser)
    // console.log(user.name)
   }
}
