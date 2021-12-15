import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
 //import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth-guard';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACOPMlxqoR8C_3advjyszY-LFnknvhVT4",
  authDomain: "myapp-9c1b7.firebaseapp.com",
  databaseURL: "https://myapp-9c1b7.firebaseio.com",
  projectId: "myapp-9c1b7",
  storageBucket: "myapp-9c1b7.appspot.com",
  messagingSenderId: "411027398515",
  appId: "1:411027398515:web:f902d3ee5df7d11e"
};
import * as firebase from 'firebase/app';
import { TabsPage } from './tabs/tabs.page';

firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [AppComponent,TabsPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
 FormsModule ,
ReactiveFormsModule,
CommonModule,
provideFirebaseApp(() => initializeApp(firebaseConfig)),
provideAuth(() => getAuth()),
provideFirestore(() => getFirestore()),
provideFunctions(() => getFunctions()),
      // 3. Initialize
      // AngularFireModule.initializeApp(firebaseConfig),
      // AngularFirestoreModule, // firestore
      // AngularFireAuthModule, // auth
      // AngularFireStorageModule ],// storage
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
