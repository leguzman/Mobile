import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuarios : any [];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewDidLoad() {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.rest.getUsers().subscribe(
      (res) => { 
        this.usuarios = res['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
