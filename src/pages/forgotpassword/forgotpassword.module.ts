import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPasswordPage } from './forgotpassword';

@NgModule({
  declarations: [
    ForgotPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPasswordPage),
  ],
})
export class ForgotPasswordPageModule {}
