import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num: number = 0;
  mayorMenor: string = "...";
  numSecret: number = this.numAleatorio(0,100);
  numAttempts: number = 0;

  constructor() {}

  numAleatorio(a:number, b:number){
    return Math.round(Math.random()*(b-a)+a)
  }

  compruebaNumero(){
    this.numAttempts++;
    if(this.num>this.numSecret){
      this.mayorMenor="El numero secreto es menor";
    }else if(this.num<this.numSecret){
      this.mayorMenor="El numero secreto es mayor"
    }else{
      this.mayorMenor="Has acertado el numero secreto"
    }
  }

  restartGame(){
    this.num = 0;
    this.mayorMenor = "...";
    this.numSecret = this.numAleatorio(0,100);
    this.numAttempts = 0;
  }
}
