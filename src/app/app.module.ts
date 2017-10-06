import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SensorsPage } from '../pages/sensors/sensors';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { TiendaPage } from '../pages/tienda/tienda';
import { ProfilePage } from '../pages/profile/profile';
import { SupportPage } from '../pages/support/support';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SensorsPage,
    SignUpPage,
    ProgressBarComponent,
    TiendaPage,
    ProfilePage,
    SupportPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SensorsPage,
    SignUpPage,
    TiendaPage,
    ProfilePage,
    SupportPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
