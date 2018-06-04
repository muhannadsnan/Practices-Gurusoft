import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  tmp;
  catId = 0;
  products: any = [];

  constructor(private prodService: ProductService, 
              private catService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //this.catService.catSelected.subscribe(catId => this.catId = catId);
    this.route.params.subscribe(params => {
      // console.log(params['catid']);
      if(typeof params['catid'] === 'undefined') {
        this.products = this.readAllProds();
        this.catId = 0;
      }else{
        this.products = this.readProd(+params['catid']);
        this.catId = +params['catid'];
      }
    });
  }

  readAllProds() {
    return this.prodService.getAllProducts();
  }

  readProd(id) {
    return this.prodService.getCatProds(id);
  }

}
