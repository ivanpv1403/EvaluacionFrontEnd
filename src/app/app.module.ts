import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListItemsProductosComponent } from './components/productos/list-items-productos/list-items-productos.component';
import { ItemProductoComponent } from './components/productos/item-producto/item-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FooterComponent,
    ListItemsProductosComponent,
    ItemProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
