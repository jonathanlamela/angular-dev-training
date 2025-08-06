import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Clock } from "./components/clock/clock";
import { YourName } from "./components/your-name/your-name";
import { ListCategories } from "./components/list-categories/list-categories";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Clock, YourName, ListCategories],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


}
