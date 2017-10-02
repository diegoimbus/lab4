import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = LoginPage;
  constructor(public navCtrl: NavController, public storage: Storage) {

  }
  setContent(index:number){
    if(index == 0) {
      this.root = HomePage;
    }
    else {
      this.root = LoginPage;
    }
  }

  logout(){
    this.storage.set("logged", false)
    this.navCtrl.setRoot(LoginPage)

  }

}

interface Menu {
  label: string;
  icon: string;
}