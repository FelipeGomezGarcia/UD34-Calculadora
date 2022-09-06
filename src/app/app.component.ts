import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD34-Calculadora';

  operacion: string="";
  resultado = 0;
  numeros: any = [];

  escribirInput(numero: string){
    this.operacion += numero;
  }

  borrarInput(){
    this.operacion = this.operacion.substring(0, this.operacion.length-1);
  }

  darResultado(){
    this.resultado = eval(this.operacion);
  }

}
