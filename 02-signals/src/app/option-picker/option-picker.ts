import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-option-picker',
  imports: [],
  templateUrl: './option-picker.html',
  styleUrl: './option-picker.css'
})
export class OptionPicker {

  optionsAvailable = signal<OptionValue[]>([
    { id: 'CT', name: 'Catania' },
    { id: 'PA', name: 'Palermo' },
    { id: 'ME', name: 'Messina' },
    { id: 'SR', name: 'Siracusa' },
    { id: 'TP', name: 'Trapani' }
  ]);
  selectedOption = linkedSignal(() => this.optionsAvailable()[0]);

  pickCity(index: string) {
    this.selectedOption.set(this.optionsAvailable().find(city => city.id === index)!);
  }

  deleteCity(index: string) {
    this.optionsAvailable.update(options => options.filter(city => city.id !== index));
  }

}

type OptionValue = {
  id: string;
  name: string;
}
