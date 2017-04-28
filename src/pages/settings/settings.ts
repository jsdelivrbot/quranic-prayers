import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from 'ng2-translate';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private language: string;
  private showTransFa: boolean;
  private showTransEn: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private translator: TranslateService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.getLang();
    this.getShowTransFa();
    this.getShowTransEn();
  }

  getLang() {
    this.storage.get('lang').then((lang) => {
      this.language = lang;
    });
    if( this.language == "") {
      this.setLang("en");
    }
  }

  setLang(lang: string) {
    this.storage.set('lang', lang);
    this.translator.setDefaultLang(lang);

  }

  getShowTransFa() {
    this.storage.get('showTransFa').then((showTransFa) => {
      this.showTransFa = showTransFa
    });
  }

  setShowTransFa(showTransFa: boolean) {
    this.storage.set('showTransFa', showTransFa);
  }

  getShowTransEn() {
    this.storage.get('showTransEn').then((showTransEn) => {
      this.showTransEn = showTransEn
    });
  }

  setShowTransEn(showTransEn: boolean) {
    this.storage.set('showTransEn', showTransEn);
  }
}
