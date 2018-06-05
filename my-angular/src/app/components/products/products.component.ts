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
    this.route.params.subscribe(params => {
      if(typeof params['catid'] === 'undefined') {
        this.products = this.readAllProds();
        this.catId = 0;
      }else{
        this.products = this.readProd(params['catid']); 
        this.catId = +params['catid'];
      }
    });// for å kunne vise meldingen "velg en kategori" kan vi bruke Subject her for å informere CategoriesCopmonent at det er en valgt kategori.

    // LISTEN TO SELECTING A CATEGORY TO TAKE PRODUCTS FROM THE SUBJECT
    this.catService.selectedCategory.subscribe(selectedCat => { 
      this.products = typeof selectedCat.products === 'undefined' ? []: Object.values(selectedCat.products); console.log(this.products);
    });
  }

  readAllProds() {
    return this.prodService.getAllProducts();
  }

  readProd(id) {
     this.catService.getCatProds(id);
  }

}