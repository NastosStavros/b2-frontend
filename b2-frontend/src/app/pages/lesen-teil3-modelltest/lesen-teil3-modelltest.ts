import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { readingTeil3Sets } from '../../data/reading-teil3-sets';

@Component({
  selector: 'app-lesen-teil3-modelltest',
  imports: [NgFor],
  templateUrl: './lesen-teil3-modelltest.html',
  styleUrl: './lesen-teil3-modelltest.scss',
})
export class LesenTeil3Modelltest {
  readingSet = readingTeil3Sets[0];
  currentQuestion = this.readingSet.questions[0];
}
