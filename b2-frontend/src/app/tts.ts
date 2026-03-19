import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Tts {
  constructor(private http: HttpClient) { }

  sendText(text: string) {
    return this.http.post('http://127.0.0.1:8000/api/tts/',
      { text: text },
      { responseType: 'blob' }
    );
  }
}
