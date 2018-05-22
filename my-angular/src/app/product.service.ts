import { Product } from "./models/product";

export class ProductService {
	img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIK2gOCXVAHf8RDFQPSDp95y-gzk5RxlVVRDLzd5NHucLrYIlwhw";
	products = [
		new Product(1, 'golf', this.img, 1),
		new Product(2, 'passat', this.img, 3),
		new Product(3, 'ford focus', this.img, 1),
		new Product(4, 'jeep', this.img, 2),
	];

	getOneProduct(id){
		return this.products.filter(prod => prod.id == id);
	}

	getCatProds(catId){
		 return this.products.filter(prod => prod.cat == catId);
	}
}