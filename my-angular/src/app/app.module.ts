import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { AboutComponent } from './components/about/about.component';

import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
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
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [CategoryService, ProductService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
