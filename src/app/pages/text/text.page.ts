import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage implements OnInit {

  constructor(private route : Router) { }

  test(){
    console.log('***')
    this.route.navigateByUrl('tabs/chats');
  }
  sendMsg(){
    console.log('***sendMsg clicked...')
  }
  sendEmj(){
    console.log('*** sendEmj clicked...')
  }
  ngOnInit() {
  }

}
