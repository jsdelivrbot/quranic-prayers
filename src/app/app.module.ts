import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http } from "@angular/http";
import { QuotePipe } from './quote.pipe';
import { PadLeftPipe } from './padleft.pipe';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage} from '../pages/about/about';
import { SettingsPage} from '../pages/settings/settings';
import { PrayerPage } from '../pages/prayer/prayer';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from "ng2-translate/src/translate.service";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    SettingsPage,
    PrayerPage,
    QuotePipe,
    PadLeftPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    AboutPage,
    PrayerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}




