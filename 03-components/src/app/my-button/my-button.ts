import { Component, input } from '@angular/core';

@Component({
  selector: 'app-my-button,[my-button],.my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {

  value = input.required<string>();

}
