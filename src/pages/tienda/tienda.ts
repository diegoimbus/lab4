import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tienda',
  templateUrl: 'tienda.html',
})
export class TiendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiendaPage');
  }

  slides = [
    {
      title: "HORGANIC",
      description: "El <b>Sistema de compostaje HOrganic</b> hace posible que aproveches toda la basura de tu cocina.",
      image: "https://www.designboom.com/wp-content/uploads/2017/01/zera-food-recycler-wlabs-whirlpool-designboom-001.jpg",
    },
    {
      title: "Aditivos",
      description: "<b>Compost en un día</b> gracias a nuestro aditivo capaz de acelerar el proceso de compostaje.",
      image: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/fl_progressive:semi,q_auto,f_auto,c_limit,w_695/v1484228408/suuw6t8udyrsn5e9ksy6.png",
    },
    {
      title: "Filtros",
      description: "<b>Libera tu cocina de malos olores</b> gracias a los filtros de carbon de HOrganic.",
      image: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/fl_progressive:semi,q_auto,f_auto,c_limit,w_695/v1484228472/a7j31ajirpfo7ffmpvmf.png",
    }
  ];

}
