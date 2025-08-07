import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButton } from "./my-button/my-button";
import { MyInput } from "./my-input/my-input";
import { Container } from "./container/container";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyButton, MyInput, Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03-components');

  myInputValue = signal<string>('Ciao mondo');


}
