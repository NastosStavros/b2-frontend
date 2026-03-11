import { Component } from '@angular/core';
import { readingTeil1Sets } from '../../data/reading-teil1-sets';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lesen-teil1-modelltest',
  imports: [NgFor],
  templateUrl: './lesen-teil1-modelltest.html',
  styleUrl: './lesen-teil1-modelltest.scss',
})
export class LesenTeil1Modelltest {
  set = readingTeil1Sets[0];
  answers: { [key: number]: string } = {};

  selectAnswer(personId: number, articleId: string ) {
    this.answers[personId] = articleId
    console.log(this.answers);
  }
}
