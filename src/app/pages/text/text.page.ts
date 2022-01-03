import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  GestureController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage implements OnInit, AfterViewInit {

  recording = false;
  storedFileNames =[ ];
  durationTime = '';
  duration = 0;
  playing = false;
  msg = "";
  @ViewChild('recordbtn', {read : ElementRef}) recordbtn : ElementRef;
  @ViewChild(IonContent) Content :IonContent;
  constructor(private gestCtrl : GestureController ,private route : Router,public platform: Platform, ) { 

          
  }

  test(){
    console.log('***')
    this.route.navigateByUrl('tabs/chats');
  }
  sendMsg(){
    this.Content.scrollToBottom(200);
    console.log('***sendMsg clicked...')
    console.log(this.msg)

  }
  sendEmj(){
    console.log('*** sendEmj clicked...')
  }
  ngAfterViewInit(){

    const longpress = this.gestCtrl.create({
      el : this.recordbtn.nativeElement,
      threshold : 0,
      gestureName : 'long-press',
      onStart: ev => {
          Haptics.impact({style: ImpactStyle.Light});
          this.startRecording();
      },
      onEnd : ev => {
        Haptics.impact({style: ImpactStyle.Light});
        this.stopRecording();
      }
    }, true);
    longpress.enable();
  }

  calculateDuration(){
    if(!this.recording){
      this.duration = 0;
      this.durationTime = '';
      return;
    }

    this.duration += 1;
    const minutes = Math.floor(this.duration / 60);
    const seconds = (this.duration % 60).toString().padStart(2,'0');
    this.durationTime = `${minutes}:${seconds}`;
    setTimeout(() => {
      this.calculateDuration();
    }, 1000);
  }

  async play(FileName){
    this.playing = true;
    const audioFile = await Filesystem.readFile({
      path : FileName,
      directory : Directory.Data
    });
     console.log(audioFile)
     const base64Sound = audioFile.data;

     const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`)
    alert('voice note playng in background')
     audioRef.oncanplaythrough = () => audioRef.play();
     audioRef.load();
     this.playing = false;
  }
  async loadFiles(){
   Filesystem.readdir({
     path : '',
     directory : Directory.Data
   }).then( res => {
     console.log(res)
     this.storedFileNames = res.files;
   })
  }
  startRecording(){
    if(this.recording){
      return;
    }
    this.recording =true;
    VoiceRecorder.startRecording();
  }
  stopRecording(){
    if(!this.recording){
      return;
    }
    VoiceRecorder.stopRecording().then(async (res: RecordingData) => {
      if(res.value && res.value.recordDataBase64){
        const recordData =res.value.recordDataBase64;
        console.log(recordData)
        const fileName =new Date().getTime() + '.wav'
        await Filesystem.writeFile({
          path : fileName,
          directory : Directory.Data,
          data : recordData
        })
        this.loadFiles;
      }
    })
  }
  ngOnInit() {
    this.loadFiles()
    VoiceRecorder.requestAudioRecordingPermission();
  }

}
