import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lesen-teil1-einweisung',
  imports: [NgIf],
  templateUrl: './lesen-teil1-einweisung.html',
  styleUrl: './lesen-teil1-einweisung.scss'
})
export class LesenTeil1Einweisung {

  result: string = '';

  answer(choice: string) {
    if (choice === 'a') {
      this.result = '✔ Richtig! Diese Anzeige passt zu Elena.';
    } else {
      this.result = '❌ Falsch. Diese Anzeige geht um Bewerbungen.';
    }
  }

}