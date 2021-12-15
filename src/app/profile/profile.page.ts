import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private route: Router) { }
  run(){
    this.route.navigateByUrl('tabs/update-profile');
  }
  ngOnInit() {
  }

}
