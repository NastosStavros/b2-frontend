import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Tts } from './tts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('b2-frontend');
  constructor(private tts: Tts) { }

  play() {
    this.tts.sendText("Hallo").subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
    });
  }
}
