import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CodepadsPage } from '../pages/codepads/codepads';
import { OptionsPage } from '../pages/options/options';
import { EditorPage } from '../pages/editor/editor';
import { NotificationsPage } from '../pages/notifications/notifications';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;
  items: Array <{title: string, icon: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.items = [
      {title: 'Log Out', icon: 'md-exit'}
    ];
    this.pages = [
      { title: 'Editor', component: EditorPage, icon: 'md-code'},
      { title: 'Codepads', component: CodepadsPage,icon: 'ios-paper'},
      { title: 'Notifications', component: NotificationsPage ,icon: 'md-notifications'},      
      { title: 'Options', component: OptionsPage,icon: 'md-options'},
      { title: 'About', component: AboutPage, icon: 'md-information-circle'}
    ];

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
