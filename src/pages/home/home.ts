import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { NavController } from 'ionic-angular';
import { PrayerPage } from '../prayer/prayer';
import { Storage } from '@ionic/storage';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private sections: Array<{no:number, name: string, items: any[] }>;
  private data: Array<{no:number, name: string, items: any[] }>;
  private showTransFa: boolean;
  private showTransEn: boolean;
  private language: string;

  constructor(public navCtrl: NavController, 
              private http: Http, 
              private storage: Storage, 
              private translator: TranslateService) {
    this.initializeItems();
    this.getShowTrans();
    this.getLang();
  }

  initializeItems() {
    if (!this.data) {
      this.http.get('data.json').map((res: Response) => res.json()).subscribe(res => this.sections = this.data = res);
    }
    else {
      this.sections = this.data.slice();
    }
  }

  itemSelected(item: any): void {
    this.navCtrl.push(PrayerPage, { 
      item: item,
      showTransFa: this.showTransFa,
      showTransEn: this.showTransEn
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.sections = this.sections.filter((section) => {
        return (section.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

    getShowTrans(){
    if(this.storage){
    this.storage.get('showTransFa').then((showTransFa) => {
        this.showTransFa = showTransFa;
      });
    this.storage.get('showTransEn').then((showTransEn) => {
        this.showTransEn = showTransEn;
      });
    }
  }

    getLang() {
    this.storage.get('lang').then((lang) => {
        this.language = lang;
    });
  }


}
