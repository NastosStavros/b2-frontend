import { Component } from '@angular/core';
import { readingTeil1Sets } from '../../data/reading-teil1-sets';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-lesen-teil1-modelltest',
  imports: [NgFor, NgIf],
  templateUrl: './lesen-teil1-modelltest.html',
  styleUrl: './lesen-teil1-modelltest.scss',
})
export class LesenTeil1Modelltest {
  set = readingTeil1Sets[0];
  answers: { [key: number]: string } = {};
  results: { [key: number]: boolean } = {}

  selectAnswer(personId: number, articleId: string) {
    this.answers[personId] = articleId
    console.log(this.answers);
  }

  checkAnswers() {
    this.set.persons.forEach(person => {
      this.results[person.id] =
        this.answers[person.id] === person.correctArticle
    });
  }

  areAllAnswered() {
    return Object.keys(this.answers).length === this.set.persons.length;
  }

  getScore() {
    return Object.values(this.results).filter(r => r === true).length;
  }
}
