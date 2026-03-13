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
  readingSet = readingTeil2Sets[1];
  answers: { [key: number]: string } = {};
  results: { [key: number]: boolean } = {};
  score: number = 0

  checkAnswers() {
    this.score = 0;

    this.readingSet.questions.forEach(question => {
      console.log(this.answers[question.id], question.correctAnswer);
      if (this.answers[question.id] === question.correctAnswer) {
        this.results[question.id] = true;
        this.score++;
      }
      else {
        this.results[question.id] = false
      }
    });
  }

  allAnswered(): boolean {
    return this.readingSet.questions.every(q => this.answers[q.id] !== undefined);
  }
}
