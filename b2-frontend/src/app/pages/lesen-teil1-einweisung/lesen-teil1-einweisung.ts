import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lesen-teil1-einweisung',
  imports: [NgIf],
  templateUrl: './lesen-teil1-einweisung.html',
  styleUrl: './lesen-teil1-einweisung.scss'
})
export class LesenTeil1Einweisung {

  result1: string = '';
  result2: string = '';
  selected1: string = '';

  answer1(choice: string) {

  this.selected1 = choice;   // ← wichtig

  if (choice === 'a') {
    this.result1 = '✔ Richtig! Peter sucht eine Teilzeitstelle als Elektriker.';
  } else {
    this.result1 = '❌ Falsch. Hier geht es um eine Ausbildung.';
  }
}

  answer2(choice: string) {
    if (choice === 'c') {
      this.result2 = '✔ Richtig! Maria sucht einen Deutschkurs für den Beruf.';
    } else {
      this.result2 = '❌ Falsch. Hier wird eine Verkäuferin gesucht.';
    }
  }
  
}