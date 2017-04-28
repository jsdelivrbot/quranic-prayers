import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { MenuController} from 'ionic-angular';
import { Nav} from 'ionic-angular';
import {TranslateService} from 'ng2-translate';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { Storage} from '@ionic/storage';


@Component({
  templateUrl: 'app.html',
  providers: [ Storage ]
})
export class MyApp {
  @ViewChild('nav') nav: Nav
  rootPage = HomePage;
  pages : Array<{icon:string, title: string, component: any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController,
    private translator: TranslateService,
    private storage : Storage
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.getLang();
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.pages=[
          {icon: 'home',title: 'HOME', component: HomePage},
				  {icon: 'settings',title: 'SETTINGS', component: SettingsPage},
				  {icon:'information-circle', title: 'ABOUT', component: AboutPage}];
    });
  }

  getLang() {
  this.storage.get('lang').then((lang) => {
      this.translator.setDefaultLang(lang);
  });
  }

openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.menu.close();
  }

}
