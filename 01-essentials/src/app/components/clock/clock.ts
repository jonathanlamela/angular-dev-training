import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock implements OnInit {
  protected readonly title = signal('01-essentials');

  ngOnInit() {
    // Initialization logic here
    setInterval(() => {
      this.title.set(new Date().toLocaleTimeString());
    }, 1000);
  }
}
