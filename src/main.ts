import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
})
export class App {
  outputMessage: string = '';

  callback = () => {
    this.outputMessage = 'Timeout expired';
  };

  start(cb: any) {
    this.outputMessage = '';
    setTimeout(cb, 3000);
  };
}

bootstrapApplication(App);
