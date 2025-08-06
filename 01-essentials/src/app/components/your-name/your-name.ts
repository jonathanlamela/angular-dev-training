import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-your-name',
  imports: [],
  templateUrl: './your-name.html',
  styleUrl: './your-name.css'
})
export class YourName {

  name = signal('');
  uppercaseName = computed(() => this.name().toUpperCase());

  constructor() {
    // Initialization logic here
  }

  setName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }


}
