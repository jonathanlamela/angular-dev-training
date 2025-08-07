import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MakeItalic } from './make-italic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, NgStyle, MakeItalic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('05-directives');

  protected readonly isRed = signal(false);
  isTextBold = signal(false);

  currentStyles: Record<string, string> = {
    'font-weight': this.isTextBold() ? 'bold' : 'normal',
  };

  toggleRed() {
    this.isRed.set(!this.isRed());
  }

  toggleBold() {
    this.isTextBold.set(!this.isTextBold());
    this.currentStyles = {
      'font-weight': this.isTextBold() ? 'bold' : 'normal',
    };
  }
}
