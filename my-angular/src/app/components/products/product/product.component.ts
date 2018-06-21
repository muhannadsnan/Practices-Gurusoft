import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../../models/product';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { environment } from '../../../../environments/environment';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  cloudinaryUrl = environment.cloudinary.url;
  editing = {enabled: false, title: false, desc: false, price: false};
  newProd;
  @ViewChild('txtEditTitle') txtEditTitle: ElementRef;
  @ViewChild('txtEditDesc') txtEditDesc: ElementRef;
  @ViewChild('txtEditPrice') txtEditPrice: ElementRef;
    
  constructor(private prodService: ProductService) { }

  ngOnInit() {
  }

  toggleEditing(){
    if(this.editing.enabled){
      this.editing = { enabled: false, title: false, desc: false, price: false }; 
      this.product.title = this.txtEditTitle.nativeElement.value ? this.txtEditTitle.nativeElement.value : this.product.title;
      this.product.desc= this.txtEditDesc.nativeElement.value ? this.txtEditDesc.nativeElement.value : this.product.desc;
      this.product.price= this.txtEditPrice.nativeElement.value ? this.txtEditPrice.nativeElement.value : this.product.price;
      this.prodService.updateProduct(this.product);      
      console.log("hahaaaaaaaaaaaaaaaa",this.product);
    }
    this.editing.enabled = !this.editing.enabled    
  }
  editTitle(){
    if (this.editing.enabled) this.editing.title = true;
  }
  editDesc() {
    if (this.editing.enabled) this.editing.desc = true;
  }
  editPrice() {
    if (this.editing.enabled) this.editing.price = true;
  }

}
