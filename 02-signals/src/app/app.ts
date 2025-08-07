import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";
import { CurrentUser } from "./current-user/current-user";
import { OptionPicker } from "./option-picker/option-picker";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, CurrentUser, OptionPicker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {




}
