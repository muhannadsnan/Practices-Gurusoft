import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CategoryComponent } from "./components/categories/category/category.component";
import { ProductsComponent } from "./components/products/products.component";
import { ContentComponent } from "./components/content/content.component";
import { AboutComponent } from "./components/about/about.component";

const routes = [
	{path: '', redirectTo: '/categories', pathMatch: 'full'},
	{path: 'categories', component: ContentComponent, children: [
		{path: ':catid', component: ProductsComponent}
	]},
	{path: 'about', component: AboutComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class RoutingModule {

}