import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotPasswordPage {

  email: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  ResetPassword() {
    if(this.email == '' || this.email == null){
      let emptyInput = this.toastCtrl.create({
        message: 'Please fill in your email address',
        duration: 3000,
        position: 'bottom'
      });
  
      emptyInput.present();
    } else {
      console.log('Email:', this.email);
    }
  }

}
