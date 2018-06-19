import { Product } from "../models/product";
import { Observable } from "rxjs";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore } from "angularfire2/firestore";

@Injectable()

export class ProductService {


	constructor(private firebase: AngularFirestore){}

	readAllProds(){

	}


	MAP(observable: Observable<any[]>) {
		return observable.pipe(
			map(actions => {
				return actions.map(a => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				})
			})
		)
	}
}