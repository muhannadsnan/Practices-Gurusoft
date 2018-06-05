import { Category } from "../models/category";
import { Injectable, EventEmitter } from "@angular/core";
import { ProductService } from "./product.service";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()

export class CategoryService {
	catRef: AngularFireList<any>;
	categories: Observable<any[]>;
	// catSelected: EventEmitter<any> = new EventEmitter();
	selectedCategory = new Subject<any>();

	constructor(private http: HttpClient,
				private db: AngularFireDatabase){
		this.catRef = db.list('categories');
		// this.categories = this.db.list<Category>('/categories').valueChanges(); // correct but without keys
		this.categories = this.catRef.snapshotChanges().pipe(
			map(changes => {
				return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
			})
		);
	}
	
	getCats(){
		return this.categories;
	}

	createCat(newCat){
		this.catRef.push(newCat)
	}

	destroyCat(key){
		this.catRef.remove(key);
	}

	selectedChanged( sCat/*, catId */) {
		// this.catSelected.emit(catId);
		this.selectedCategory.next(sCat);
	}

	getCatProds(key) {
		// return this.catRef.query.orderByKey().equalTo(key);
		// console.log("getCatProds", this.db.list('/categories', {query: {orderByKey, equalTo: key}}))
		const ref = this.db.list('/categories/'+key);
		let x = ref.snapshotChanges().pipe(
			map(changes => {
				return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
			})
		);
		console.log("getCatProds", x);		
	}
}