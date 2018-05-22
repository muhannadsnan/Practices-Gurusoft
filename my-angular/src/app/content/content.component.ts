import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  categories = [];


  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private route: ActivatedRoute){}

  ngOnInit() {
    this.categories = this.categoryService.categories;
  }

  catChanged(id){
    // this.route.params.subscribe(params => this.catId = +params['catid']);    
    this.categoryService.selectedChanged(id); 
  }


}
