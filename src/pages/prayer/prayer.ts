import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { QuotePipe } from '../app/quote.pipe';
/*
  Generated class for the Prayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-prayer',
  templateUrl: 'prayer.html'
})
export class PrayerPage {
  private item: any;
  private showTransFa: boolean;
  private showTransEn: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams) {
      this.item = navParams.get('item');
      this.showTransFa = navParams.get('showTransFa');
      this.showTransEn = navParams.get('showTransEn');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayerPage');
  }

  previous() {
    console.log('previous');

  }

  next() {
    console.log('next');
  }

}
