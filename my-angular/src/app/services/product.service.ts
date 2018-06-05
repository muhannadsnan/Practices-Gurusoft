import { Product } from "../models/product";
import { Observable } from "rxjs";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()

export class ProductService {
	img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIK2gOCXVAHf8RDFQPSDp95y-gzk5RxlVVRDLzd5NHucLrYIlwhw";
	prodRef: AngularFireList<any>
	products: Observable<any[]>;
	catID: string;

	constructor(db: AngularFireDatabase, route: ActivatedRoute){
		route.params.subscribe(params => {
			this.catID = params['catid']; console.log(this.catID);
			this.prodRef = db.list("/categories/" + this.catID + "/products");
		});
				
	}

	getAllProducts(){
		return this.products;
	}

	getOneProduct(id){
		//return this.products.filter(prod => prod.id == id);
	}

	getCatProds(key){
		this.catID = key;
		this.products = this.prodRef.snapshotChanges().pipe(
			map(changes => { return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) })
		);
		return this.products;
	}
}