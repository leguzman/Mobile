import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodepadsPage } from './codepads';

@NgModule({
  declarations: [
    CodepadsPage,
  ],
  imports: [
    IonicPageModule.forChild(CodepadsPage),
  ],
})
export class CodepadsPageModule {}
