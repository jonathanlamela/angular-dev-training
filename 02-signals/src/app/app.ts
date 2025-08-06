import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }



}
