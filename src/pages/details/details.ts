import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
  //selector: 'details',//moved down because of strange error if commented and left above
})
export class DetailsPage {

  item: any;

  constructor(public navCtrl: NavController, public params:NavParams) {
    this.item = params.get('item');
  }

}
