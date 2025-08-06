import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Category {

  getCategories() {
    return [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Books' },
      { id: 3, name: 'Clothing' },
      { id: 4, name: 'Home & Kitchen' }
    ];
  }

}
