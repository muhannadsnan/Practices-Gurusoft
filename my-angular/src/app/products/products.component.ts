import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  tmp;
  catId = 0;
  products = [];

  constructor(private prodService: ProductService, 
              private catService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.catService.catSelected.subscribe((catId) => {
      this.catId = catId;
    });
    this.route.params.subscribe(params => this.products = this.prodService.getCatProds(+params['catid']));
    ;
    
  }



}
