import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock implements OnInit {

  currentTime = signal(new Date());
  currentHour = computed(() => {
    const hours = this.currentTime().getHours();
    return hours < 10 ? `0${hours}` : hours.toString();
  });
  currentMinute = computed(() => {
    const minutes = this.currentTime().getMinutes();
    return minutes < 10 ? `0${minutes}` : minutes.toString();
  });
  currentSecond = computed(() => {
    const seconds = this.currentTime().getSeconds();
    return seconds < 10 ? `0${seconds}` : seconds.toString();
  });

  ngOnInit() {
    // Initialization logic here
    setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);
  }
}
