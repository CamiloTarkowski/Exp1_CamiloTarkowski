import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombre : '',
    apellidos : '',
    fono : '',
    email : '',
    password:'',
    condiciones:'true' 
  }

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

  mostrarMenu(){
    this.menuController.open('first');  }

}
