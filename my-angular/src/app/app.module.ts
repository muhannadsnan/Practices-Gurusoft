import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { RoutingModule } from './routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavComponent,
    ContentComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
