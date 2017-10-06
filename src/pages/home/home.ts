import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SensorsPage } from '../sensors/sensors';
import { Storage } from '@ionic/storage';
import { TiendaPage } from '../tienda/tienda';
import { SupportPage } from '../support/support';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = SensorsPage;
  menuOpc: Menu[] = [
    
        { label: 'Inicio', icon: 'home' },
        { label: 'Productos', icon: 'cart' },
        { label: 'Perfil', icon: 'person'},
        { label: 'Soporte', icon: 'cog' }

    
      ]
  constructor(public navCtrl: NavController, public storage: Storage) {

  }
  setContent(index:number){
    if(index == 0) {
      this.root = SensorsPage;
    }
    else if(index == 1) {
      this.root = TiendaPage
    }
    else if (index == 2) {
      this.root = ProfilePage
    }
    else if (index == 3) {
      this.root = SupportPage
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