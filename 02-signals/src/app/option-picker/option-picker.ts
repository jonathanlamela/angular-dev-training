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

  selectedOption = linkedSignal<OptionValue[], OptionValue>({
    source: this.optionsAvailable,
    computation: (options, previous) => {
      return options.find((option) => option.id === previous?.value.id) || options[0]
    }
  });

  pickCity(index: string) {
    this.selectedOption.set(this.optionsAvailable().find(city => city.id === index)!);
  }

  deleteCity(index: string) {
    this.optionsAvailable.update(options => options.filter(city => city.id !== index));
  }

  shuffleOptions() {
    this.optionsAvailable.update(options => {
      const shuffled = [...options];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }

}

type OptionValue = {
  id: string;
  name: string;
}
