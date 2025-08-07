import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonToggler } from "./button-toggler/button-toggler";
import { DeferDemo } from "./defer-demo/defer-demo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonToggler, DeferDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('04-templates');
}
