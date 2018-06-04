import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { CategoryComponent } from "./components/categories/category/category.component";
import { ProductsComponent } from "./components/products/products.component";
import { AboutComponent } from "./components/about/about.component";

const routes = [
	{path: '', redirectTo: '/Home', pathMatch: 'full'},
	{ path: 'Home', component: HomeComponent },	
	{ path: 'Home/:name', component: HomeComponent },	
	{path: 'categories', component: CategoriesComponent, children: [
			{path: ':catid', component: ProductsComponent}
		]
	},
	{ path: 'products', component: ProductsComponent},
	{path: 'about', component: AboutComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class RoutingModule {

}