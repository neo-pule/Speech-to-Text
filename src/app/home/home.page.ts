import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string
};
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  item$: Observable<Item[]>;
  constructor() {
    let obj;
    
    // const collections = collection(firestore, 'save');
    // obj = collectionData(collections).subscribe((res) =>{
    //   console.log(res)
    // });
    // console.log(obj)
     
  }

}
