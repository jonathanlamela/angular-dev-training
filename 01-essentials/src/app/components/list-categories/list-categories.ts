import { Component, inject } from '@angular/core';
import { Category } from '../../services/category';

@Component({
  selector: 'app-list-categories',
  imports: [],
  templateUrl: './list-categories.html',
  styleUrl: './list-categories.css'
})
export class ListCategories {

  private categoryService = inject(Category);

  getCategories() {
    return this.categoryService.getCategories();
  }

}
