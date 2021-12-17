import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(private route : Router) { }

  test(){
    this.route.navigateByUrl('tabs/text');
  }
  ngOnInit() {
  }

}
