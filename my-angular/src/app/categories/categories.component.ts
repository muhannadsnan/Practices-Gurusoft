import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = [];

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.categoryService.categories;
  }

  catChanged(id) {
    // this.route.params.subscribe(params => this.catId = +params['catid']);    
    this.categoryService.selectedChanged(id);
  }

}
