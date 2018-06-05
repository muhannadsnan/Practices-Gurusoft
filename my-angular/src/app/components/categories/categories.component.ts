import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categories;
  selectedCat = 0;
  loadingCats = true;
  @ViewChild('catTitle') catTitle: ElementRef;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getCats();
  }

  catChanged(id) {
    this.selectedCat = id;
    // this.categoryService.selectedChanged(id);
  }

  onAddCat(){ 
    this.categoryService.createCat(new Category(this.catTitle.nativeElement.value));
    this.catTitle.nativeElement.value = '';
  }

}
