import { Component } from '@angular/core';
import { readingTeil4Sets } from '../../data/reading-teil4-sets';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-lesen-teil4-modelltest',
  imports: [NgFor, NgIf],
  templateUrl: './lesen-teil4-modelltest.html',
  styleUrl: './lesen-teil4-modelltest.scss',
})
export class LesenTeil4Modelltest {
  sets = readingTeil4Sets
  currentSet = readingTeil4Sets[0]
  currentIndex = 0
  showResults = false;



  prevQuestion() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.currentSet.questions.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  nextQuestion() {
    if (this.currentIndex === this.currentSet.questions.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  getScore() {
    let score = 0;

    for (let question of this.currentSet.questions) {
      if (question.userAnswer === question.correctAnswer) {
        score++;
      }
    }

    return score;
  }

  getWrongQuestions() {
    let wrongQuestions = [];

    for (let question of this.currentSet.questions) {
      if (question.userAnswer !== question.correctAnswer) {
        wrongQuestions.push(question);
      }
    }

    return wrongQuestions;
  }

  allAnswered() {
    return this.currentSet.questions.every(q => q.userAnswer);
  }
}
