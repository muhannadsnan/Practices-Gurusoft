import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { AboutComponent } from './about/about.component';

import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { DbService } from './DB.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    CategoriesComponent,
    CategoryComponent,    
    ProductsComponent,
    ProductComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [CategoryService, ProductService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
