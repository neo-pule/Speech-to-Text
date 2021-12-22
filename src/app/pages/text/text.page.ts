import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage implements OnInit {

  constructor(private route : Router,private nativeAudio: NativeAudio,public platform: Platform, ) { 

          // The Native Audio plugin can only be called once the platform is ready
          this.platform.ready().then(() => { 
            console.log("platform ready");
  
            // This is used to unload the track. It's useful if you're experimenting with track locations
            this.nativeAudio.unload('trackID').then(function() {
                console.log("unloaded audio!");
            }, function(err) {
                console.log("couldn't unload audio... " + err);
            });
  
            // 'trackID' can be anything
            this.nativeAudio.preloadComplex('trackID', `assets/audio/2Pac - Baby don't cry.mp3`, 1, 1, 0).then(function() {
                console.log("audio loaded!");
            }, function(err) {
                console.log("audio failed: " + err);
            });
        });

  }

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
