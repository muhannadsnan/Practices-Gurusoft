import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private productService: ProductService,) { }

  ngOnInit() {
  }

}
