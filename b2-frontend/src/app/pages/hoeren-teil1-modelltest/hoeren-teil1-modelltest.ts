import { Component } from '@angular/core';
import { listeningSets } from '../../data/listening-teil1-sets';
import { Tts } from '../../tts';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-hoeren-teil1-modelltest',
  imports: [NgFor, NgIf],
  templateUrl: './hoeren-teil1-modelltest.html',
  styleUrl: './hoeren-teil1-modelltest.scss',
})
export class HoerenTeil1Modelltest {

  constructor(private tts: Tts) { }
  currentSet = listeningSets[0]
  answers: { [key: number]: string } = {};
  results: { [key: number]: boolean } = {};


  playAudio() {
    this.playDialog(0);
  }

  playDialog(index: number) {
    if (index >= this.currentSet.dialog.length) return;

    const text = this.currentSet.dialog[index];

    this.tts.sendText(text).subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);

      audio.onended = () => {
        setTimeout(() => {
          this.playDialog(index + 1);
        }, 500); // 500ms Pause
      };

      audio.play();
    });
  }

  selectAnswer(questionId: number, answer: string) {
    this.answers[questionId] = answer;
    console.log(this.answers);
  }

  checkAnswers() {
    this.currentSet.questions.forEach((q) => {
      const userAnswer = this.answers[q.id];
      this.results[q.id] = userAnswer === q.correctAnswer;
    });

    console.log(this.results);
  }
}