import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { readingTeil3Sets } from '../../data/reading-teil3-sets';

@Component({
  selector: 'app-lesen-teil3-modelltest',
  imports: [NgFor, NgIf],
  templateUrl: './lesen-teil3-modelltest.html',
  styleUrl: './lesen-teil3-modelltest.scss',
})
export class LesenTeil3Modelltest {
  readingSet = readingTeil3Sets[0];
  currentIndex = 0;
  currentQuestion = this.readingSet.questions[this.currentIndex];
  options = ['a', 'b', 'c', 'd', 'e', 'f', 'x'];
  answers: { [key: number]: string } = {};
  showResults = false;

  allAnswered() {
    return Object.keys(this.answers).length === this.readingSet.questions.length;
  }


  saveAnswer(option: string) {
    this.answers[this.currentQuestion.id] = option;
  }

  prevQuestion() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.readingSet.questions.length - 1;
    } else {
      this.currentIndex--;
    }

    this.currentQuestion = this.readingSet.questions[this.currentIndex];
  }

  nextQuestion() {
    if (this.currentIndex === this.readingSet.questions.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.currentQuestion = this.readingSet.questions[this.currentIndex];
  }

  getScore() {
    let score = 0;

    for (let q of this.readingSet.questions) {
      if (this.answers[q.id] === q.correctAnswer) {
        score++;
      }
    }

    return score;
  }

  checkAnswers() {
    this.showResults = true;
  }
}