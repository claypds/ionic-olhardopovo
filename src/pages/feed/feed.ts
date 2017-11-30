import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { MenuToggle } from 'ionic-angular/components/menu/menu-toggle';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})

export class FeedPage {
  public nome_usuario: string = " Clayton Pires";
  public data_noticia: string = " São Paulo" + " Capital";
  public nome_noticia: string = " Envolvido Doria em corrupção do Carnaval 2017"
  public local_usuario: string = "Bairro Pompéia - Zona Norte"
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somanumero(n1:number, n2:number): void {
    /* TypeScript tem varias funcoes. Ex alert*/
    alert(n1 + n2 );
    
  }
  public menosnumero(n1:number, n2:number): void{
   alert(n1 - n2); 
  }
  public vezesnumero(n1:number, n2:number): void{
    alert(n1 * n2); 
   }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
   // this.somanumero(10, 66); apresenta a funcao somar
   
  }

}
