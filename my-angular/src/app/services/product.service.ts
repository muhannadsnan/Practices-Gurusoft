import { Product } from "../models/product";

export class ProductService {
	img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIK2gOCXVAHf8RDFQPSDp95y-gzk5RxlVVRDLzd5NHucLrYIlwhw";
	products = [
		new Product(1, 'golf', this.img, 1),
		new Product(2, 'passat', this.img, 3),
		new Product(3, 'ford focus', this.img, 1),
		new Product(4, 'jeep', this.img, 2),
		new Product(5, 'hammar', this.img, 2),
		new Product(6, 'jaquar', this.img, 2),
		new Product(7, 'toyota', this.img, 3),
		new Product(8, 'mersedes', this.img, 3),
		new Product(9, 'bmw', this.img, 3),
		new Product(10, 'suzuki', this.img, 3),
	];

	getAllProducts(){
		return this.products;
	}

	getOneProduct(id){
		return this.products.filter(prod => prod.id == id);
	}

	getCatProds(catId){
		 return this.products.filter(prod => prod.cat == catId);
	}
}