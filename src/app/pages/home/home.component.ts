import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contador: number;

  constructor() { }

  ngOnInit(): void {
    this.contador = 60;
    this.descontar();
  }

  descontar(){

    let intervalo = setInterval(() => {

        this.contador = this.contador - 1;

        if (this.contador === 0) {

          clearInterval(intervalo);
        }
      }, 1000);
    }
  
  reset(){
    console.log(this.contador);
  }




}
