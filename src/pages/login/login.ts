import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, ToastController  } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { SignUpPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

  openSignUp() {
    this.navCtrl.push(SignUpPage);
  }

  Login() {
    if(this.username == null || this.username == '' || this.password == null || this.password == '') {
      let emptyInput = this.toastCtrl.create({
        message: 'Please fill in your username and/or password',
        duration: 3000,
        position: 'bottom'
      });
  
      emptyInput.present();
    } else {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }

}
