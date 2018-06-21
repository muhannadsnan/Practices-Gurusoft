import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
    //console.log("product", this.product);
    this.product.img = environment.cloudinary.url + this.product.img;
  }

}
