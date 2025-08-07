import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-toggler',
  imports: [FormsModule],
  templateUrl: './button-toggler.html',
  styleUrl: './button-toggler.css',
})
export class ButtonToggler {

  isDisabled = false;

  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }

}
