import { Category } from "./models/category";
import { Injectable, EventEmitter } from "@angular/core";
import { ProductService } from "./product.service";

@Injectable()

export class CategoryService {
	categories = [
		new Category(1, 'sedan'),
		new Category(2, 'suv'),
		new Category(3, 'station'),
	];

	catSelected: EventEmitter<any> = new EventEmitter();

	selectedChanged(catId){
		this.catSelected.emit(catId);
	}
}