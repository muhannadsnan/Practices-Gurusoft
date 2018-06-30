import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { CategoryComponent } from "./components/categories/category/category.component";
import { ProductsComponent } from "./components/products/products.component";
import { AboutComponent } from "./components/about/about.component";
import { AuthGuard } from "./services/auth.guard";

const routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent },	
	{ path: 'home/:name', component: HomeComponent },	
	{path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard], children: [
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