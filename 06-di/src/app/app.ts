import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logger } from './logger';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('06-di');

  logger = inject(Logger);

  constructor() {
    this.logger.info('App initialized');
  }
}
