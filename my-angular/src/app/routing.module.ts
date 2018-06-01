import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CategoryComponent } from "./categories/category/category.component";
import { ProductsComponent } from "./products/products.component";
import { ContentComponent } from "./content/content.component";
import { AboutComponent } from "./about/about.component";

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