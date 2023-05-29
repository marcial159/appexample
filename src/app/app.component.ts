import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  receivedText?: string;

  receiveTextFromComponentOne(text: string): void {
    this.receivedText = text;
  }
}
