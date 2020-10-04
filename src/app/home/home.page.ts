import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  precoAlcool: any;
  precoGasolina: any;

  constructor() {}
  public resultado: String = "Resultado"

  calcular(){
    if (this.precoAlcool && this.precoGasolina) {
      var pAlcool = this.precoAlcool = parseFloat(this.precoAlcool)
      var pGasolina = this.precoGasolina = parseFloat(this.precoGasolina)

      var res = pAlcool / pGasolina
      if(res >= 0.7){
        this.resultado = "Melhor Usar Gasolina"
      }else{
        this.resultado = "Melhor usar Álcool"
      }
    } else {
      this.resultado = "Preencha Corretamente os Campos"
    }
  }

}
