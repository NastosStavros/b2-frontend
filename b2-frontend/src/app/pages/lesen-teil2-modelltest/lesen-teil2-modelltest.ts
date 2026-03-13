import { Component } from '@angular/core';
import { readingTeil2Sets } from '../../data/reading-teil2-sets';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-lesen-teil2-modelltest',
  imports: [NgFor, NgIf],
  templateUrl: './lesen-teil2-modelltest.html',
  styleUrl: './lesen-teil2-modelltest.scss',
})
export class LesenTeil2Modelltest {
  readingSet = readingTeil2Sets[0];
  answers: { [key: number]: string } = {};
}
