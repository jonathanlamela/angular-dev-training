import { Component, model, output } from '@angular/core';

@Component({
  selector: 'app-my-input',
  imports: [],
  templateUrl: './my-input.html',
  styleUrl: './my-input.css'
})
export class MyInput {
  value = model.required<string>();

  myEvent = output<string>();

  constructor() {
    this.value.subscribe((newValue) => {
      this.myEvent.emit(newValue);
    });
  }


}
