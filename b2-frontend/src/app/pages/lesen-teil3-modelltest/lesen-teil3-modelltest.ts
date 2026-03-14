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
  currentIndex = 0;
  currentQuestion = this.readingSet.questions[this.currentIndex];

  options = ['a', 'b', 'c', 'd', 'e', 'f', 'x'];
  answers: { [key: number]: string } = {};

  saveAnswer(option: string) {
    this.answers[this.currentQuestion.id] = option;
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentQuestion = this.readingSet.questions[this.currentIndex];
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.readingSet.questions.length - 1) {
      this.currentIndex++;
      this.currentQuestion = this.readingSet.questions[this.currentIndex];
    }
  }
}