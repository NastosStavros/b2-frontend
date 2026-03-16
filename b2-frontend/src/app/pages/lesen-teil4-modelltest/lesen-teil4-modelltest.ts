import { Component } from '@angular/core';
import { readingTeil4Sets } from '../../data/reading-teil4-sets';

@Component({
  selector: 'app-lesen-teil4-modelltest',
  imports: [],
  templateUrl: './lesen-teil4-modelltest.html',
  styleUrl: './lesen-teil4-modelltest.scss',
})
export class LesenTeil4Modelltest {
  sets = readingTeil4Sets
}
